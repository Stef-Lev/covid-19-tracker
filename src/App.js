import { FormControl, MenuItem, Select, Card, CardContent } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import Graph from './Graph';
import ThemeSwitch from './ThemeSwitch';
import { sortData, prettyPrintStat } from './util';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Theme"
import "leaflet/dist/leaflet.css"
import '../src/App.css';

function App() {
  let worldCenter = { lat: 34, lng: 0 };
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState(worldCenter);
  const [mapZoom, setMapZoom] = useState(2);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState('cases');
  const [isChecked, setIsChecked] = useState(false);
  const [theme, setTheme] = useState('light');

  //Get worldwide data
  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then(res => res.json())
      .then(data => {
        setCountryInfo(data);
        console.log('%cAPI_WORLD_INFO', 'background-color:#008B8B; font-size: 1.2rem; color:white;', data);
      });
  }, []);


  //Get countries
  useEffect(() => {
    getGlobalData();
  }, []);

  //Get latest theme from localstorage
  useEffect(() => {
    let localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
      localTheme === 'light' ? setIsChecked(false) : setIsChecked(true);
    } else {
      setTheme('light');
      setIsChecked(false);
      window.localStorage.setItem('theme', 'light');
    }
  }, []);

  //API Call to get the data for all the countries
  const getGlobalData = async () => {
    await fetch('https://disease.sh/v3/covid-19/countries')
      .then(res => res.json())
      .then(data => {
        const countries = data.map(country => (
          {
            name: country.country,
            value: country.countryInfo.iso2
          }
        ));

        const sortedData = sortData(data);
        setTableData(sortedData);
        setMapCountries(data);
        setCountries(countries);
      });
  };

  const handleCountryChange = async (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode);

    const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    //Call the data of the selected country
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setCountry(countryCode);
        setCountryInfo(data);

        countryCode === 'worldwide'
          ? setMapCenter(worldCenter)
          : setMapCenter({ lat: data.countryInfo.lat, lng: data.countryInfo.long })
        countryCode === 'worldwide'
          ? setMapZoom(2)
          : setMapZoom(4);

        console.log(`%cAPI_${data.country}_INFO`, 'background-color:#DC143C; font-size: 2rem; color:white;', data);
      })
  };


  // @TODO LOCK MAP INTO POSITION DONE
  // @TODO FIRST COUNTRY SELECTION BUG!!! NOT DONE 
  // @FIX MOBILE VIEW DONE


  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    setIsChecked(!isChecked);

    if (!isChecked) {
      console.log('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      console.log('light');
      window.localStorage.setItem('theme', 'light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className='app'>
          <div className="app-left">
            <div className="app-header">
              <h1>COVID-19 DATA</h1>
              <ThemeSwitch isChecked={isChecked} onChange={themeToggler} />
              <FormControl className="app-dropdown">
                <Select variant="outlined" value={country} onChange={handleCountryChange}>
                  <MenuItem value='worldwide'>Worldwide</MenuItem>
                  {countries.map((country, index) => (
                    <MenuItem value={country.value} key={index}>{country.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="app-stats">
              <InfoBox title="Cases" cases={prettyPrintStat(countryInfo.todayCases)} total={prettyPrintStat(countryInfo.cases)} onClick={e => setCasesType('cases')}
                active={casesType === 'cases'} colorClass='orange'></InfoBox>
              <InfoBox title="Recovered" cases={prettyPrintStat(countryInfo.todayRecovered)} total={prettyPrintStat(countryInfo.recovered)} onClick={e => setCasesType('recovered')}
                active={casesType === 'recovered'} colorClass='green'></InfoBox>
              <InfoBox title="Deaths" cases={prettyPrintStat(countryInfo.todayDeaths)} total={prettyPrintStat(countryInfo.deaths)} onClick={e => setCasesType('deaths')}
                active={casesType === 'deaths'} colorClass='red'></InfoBox>
            </div>

            <Map
              casesType={casesType}
              countries={mapCountries}
              center={mapCenter}
              zoom={mapZoom}
            />
          </div>
          <Card className="app-right">
            <CardContent>
              <h3>Live Cases by Country</h3>
              <Table countries={tableData} />
              <h3 className="app-graphTitle" >Worldwide new {casesType} </h3>
              <Graph
                className="app-graph"
                casesType={casesType}
                colorClass={['orange', 'green', 'red']}
              />
            </CardContent>
          </Card>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
