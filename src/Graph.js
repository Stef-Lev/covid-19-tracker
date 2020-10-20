import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function Graph() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
            .then(res => res.json())
            .then(data => {
                const chartData = buildChartData(data);
                setData(chartData);
            });
    }, []);

    const buildChartData = (data, caseType = 'cases') => {
        const chartData = [];
        let lastDataPoint;

        data[caseType].forEach(date => {
            if (lastDataPoint) {
                const newDataPoint = {
                    x: date,
                    y: data[caseType][date] - lastDataPoint
                }
                chartData.push(newDataPoint);
            }
            lastDataPoint = data[caseType][date];
        });
        return chartData;
    };

    return (
        <div>
            <h1>I am graph</h1>
            {/* <Line
                data
                options
            /> */}
        </div>
    )
}

export default Graph
