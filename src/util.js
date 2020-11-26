import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';
import { Line } from 'react-chartjs-2';


const casesSeverityColors = {
    cases: {
        hex: "#f28346",
        multiplier: 800,
    },
    recovered: {
        hex: "#41db4b",
        multiplier: 1200,
    },
    deaths: {
        hex: "#ff4852",
        multiplier: 2000,
    }
};

const graphColors = {
    cases: {
        backgroundColor: 'rgba(255, 106, 60, .5)',
        borderColor: 'rgba(255, 106, 60, 1)',
    },
    recovered: {
        backgroundColor: 'rgba(65, 219, 75, .5)',
        borderColor: 'rgba(65, 219, 75, 1)',
    },
    deaths: {
        backgroundColor: 'rgba(180, 2, 36, .5)',
        borderColor: 'rgba(180, 2, 36, 1)',
    }
}

//Sort countries by cases
export const sortData = data => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
        return a.cases > b.cases ? -1 : 1
    });
    return sortedData;
};

export const prettyPrintStat = (stat) => {
    return stat ? `+${numeral(stat).format("0.0a")}` : "+0";
}

export const showDataOnMap = (data, casesType = 'cases') => (
    data.map((country, index) => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesSeverityColors[casesType].hex}
            fillColor={casesSeverityColors[casesType].hex}
            radius={
                Math.sqrt(country[casesType]) * casesSeverityColors[casesType].multiplier
            }
            key={index}
        >
            <Popup>
                <div className="info-container">
                    <div
                        className="info-flag"
                        style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                    />
                    <div className="info-name">{country.country}</div>
                    <div className="info-confirmed">
                        Cases: {numeral(country.cases).format("0,0")}
                    </div>
                    <div className="info-recovered">
                        Recovered: {numeral(country.recovered).format("0,0")}
                    </div>
                    <div className="info-deaths">
                        Deaths: {numeral(country.deaths).format("0,0")}
                    </div>
                </div>
            </Popup>
        </Circle>
    ))
);

export const setGraphColors = (data, options, casesType) => {
    return (<Line
        data={{
            datasets: [
                {
                    backgroundColor: graphColors[casesType].backgroundColor,
                    borderColor: graphColors[casesType].borderColor,
                    data: data
                },
            ],
        }}
        options={options}
    />)
};