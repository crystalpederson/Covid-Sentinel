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
      .then((response) => {
        console.log('this is covid data', response);
        return response.data;
      })
      .then((data) => {
        const cache = data.map((el) => [el.Country, el.TotalCases]);
        console.log('this is the cache', cache);
        cache.unshift(['Country', 'TotalCases']);
        setCovidData(cache);
      })
    //   .then((data) => {
    //     console.log(data);
    //     const cache = [ [], [] ];
    //     for (const property in data) {
    //       const capitalizedString = `${property[0].toUpperCase()}${property.slice(1)}`;
    //       const formattedString = capitalizedString.replaceAll(/_/g, ' ');
    //       console.log(formattedString);
    //       cache[0].push(capitalizedString);
    //       cache[1].push(data[property]);
    //     }
    //     // cache[1][1] = `${capitalizedString}: ${data[property]}`;
    //     console.log(cache);
    //     setCovidData(cache);
    //   })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  
  const options = {
    // region: '142', // Asia
    // displayMode: 'text',
    legendToggle: true,
    title: 'World Map',
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