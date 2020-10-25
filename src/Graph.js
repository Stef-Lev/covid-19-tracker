import React, { useState, useEffect } from 'react';
import numeral from 'numeral';
import { setGraphColors } from './util';

const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    callback: function (value, index, values) {
                        return numeral(value).format("0a");
                    },
                },
            },
        ],
    },
};

const buildChartData = (data, casesType) => {
    const chartData = [];
    let lastDataPoint;

    for (let date in data.cases) {
        if (lastDataPoint) {
            let newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint
            }
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];
    }
    return chartData;
};

function Graph({ casesType, ...props }) {
    const [data, setData] = useState({});
    const [colorClass, setColorClass] = useState('red');

    useEffect(() => {
        const fetchData = async () => {
            await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
                .then(res => res.json())
                .then(data => {
                    let chartData = buildChartData(data, casesType);
                    setData(chartData);
                });
        }
        fetchData();
    }, [casesType]);

    return (
        <div className={props.className}>
            {data?.length > 0 && setGraphColors(data, options, casesType)}
        </div>
    );
}

export default Graph
