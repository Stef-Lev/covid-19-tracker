import { FormControl, MenuItem, Select, Card, CardContent } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import Graph from './Graph';
import ThemeSwitch from './ThemeSwitch';
import { sortData, prettyPrintStat } from './util';
import "leaflet/dist/leaflet.css"
import '../src/App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('Worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: 30.4796 });
  const [mapZoom, setMapZoom] = useState(2);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState('cases');
  const [isChecked, setIsChecked] = useState(false);

  //Get worldwide data
  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then(res => res.json())
      .then(data => {
        setCountryInfo(data);
        console.log('%cAPI_WORLD_INFO', 'background-color:#008B8B; font-size: 2rem; color:white;', data);
      });
  }, []);


  //Get countries
  useEffect(() => {
    getGlobalData();
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

    const url = countryCode === 'Worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    //Call the data of the selected country
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setCountry(countryCode);
        setCountryInfo(data);
        if (countryCode !== 'Worldwide') {
          setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
          setMapZoom(4);
        } else {
          setMapCenter({ lat: 34.80746, lng: -40.4796 });
          setMapZoom(2);
        }
        console.log(`%cAPI_${data.country}_INFO`, 'background-color:#DC143C; font-size: 2rem; color:white;', data);
      })
  };

  // @TODO DARK MODE FUNCTIONALITY
  // @TODO SELECTED TAB FUNCTIONALITY 
  // @TODO LOCK MAP INTO POSITION

  const handleToggle = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      console.log('Dark');
      window.localStorage.setItem('darkMode', 'ON');
    } else {
      console.log('Light');
      window.localStorage.setItem('darkMode', 'OFF');
    }
  };

  return (
    <div className="app">
      <div className="app-left">
        <div className="app-header">
          <h1>COVID-19 UPDATE</h1>
          <ThemeSwitch isChecked={isChecked} onChange={handleToggle} />
          <FormControl className="app-dropdown">
            <Select variant="outlined" value={country} onChange={handleCountryChange}>
              <MenuItem value='Worldwide'>Worldwide</MenuItem>
              {countries.map((country, index) => (
                <MenuItem value={country.value} key={index}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app-stats">
          <InfoBox isRed title="Cases" cases={prettyPrintStat(countryInfo.todayCases)} total={prettyPrintStat(countryInfo.cases)} onClick={e => setCasesType('cases')}
            active={casesType === 'cases'} colorClass='orange'></InfoBox>
          <InfoBox title="Recovered" cases={prettyPrintStat(countryInfo.todayRecovered)} total={prettyPrintStat(countryInfo.recovered)} onClick={e => setCasesType('recovered')}
            active={casesType === 'recovered'} colorClass='green'></InfoBox>
          <InfoBox isRed title="Deaths" cases={prettyPrintStat(countryInfo.todayDeaths)} total={prettyPrintStat(countryInfo.deaths)} onClick={e => setCasesType('deaths')}
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
          <Graph className="app-graph" casesType={casesType} colorClass={['orange', 'green', 'red']} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
