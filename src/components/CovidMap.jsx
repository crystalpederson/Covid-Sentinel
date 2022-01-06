import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import { covidOptions } from '../utils/constants';

const CovidMap = () => {
  const [ covidData, setCovidData ] = useState([]);

  useEffect(() => {
      
    axios
      .request(covidOptions)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        const cache = data.map((el) => {
          if (el.Country === 'UK') {
            el.Country = 'United Kingdom';
          } else if ( el.Country === 'USA') {
            el.Country = 'United States';
          }
          return [ el.Country, el.TotalCases];
        });
        console.log('this is the mapped data', cache);
        cache.unshift(['Country', 'Total Cases']);
        setCovidData(cache);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  
  const options = {
    // region: '142', // Asia
    // displayMode: 'text',
    // legendToggle: true,
    // title: 'World Map',
    colorAxis: { colors: ["green", "black", "red"] }
  };
      
  
  return (
    <div>
      <h1>Covid Map</h1>
      <Chart 
        // chartEvents={[
        //   {
        //     eventName: "select",
        //     callback: ({ chartWrapper }) => {
        //       const chart = chartWrapper.getChart();
        //       const selection = chart.getSelection();
        //       if (selection.length === 0) return;
        //       const region = data[selection[0].row + 1];
        //       console.log("Selected : " + region);
        //     },
        //   },
        // ]}
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={covidData}
        options={options}
      />
    </div>
  );
  
};
  
export default CovidMap;