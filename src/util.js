import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';

const casesSeverityColors = {
    cases: {
        hex: " #b40224",
        multiplier: 800,
    },
    recovered: {
        hex: "#41db4b",
        multiplier: 1200,
    },
    deaths: {
        hex: "#fb4443",
        multiplier: 2000,
    }
};

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
    data.map(country => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesSeverityColors[casesType].hex}
            fillColor={casesSeverityColors[casesType].hex}
            radius={
                Math.sqrt(country[casesType]) * casesSeverityColors[casesType].multiplier
            }
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