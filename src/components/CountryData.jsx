import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { Chart } from 'react-google-charts';


const CountryData = ({countryData}) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const cache = [['','']];

    const fatalRate = (countryData['TotalDeaths']/countryData['TotalCases']*100).toFixed(2);
    const recoveryRate = (countryData['TotalRecovered']/countryData['TotalCases']*100).toFixed(2);
    const activeRate = (countryData['ActiveCases']/countryData['Population']*100).toFixed(2);
    
    cache.push(['% of population with active cases', {v: activeRate, f: activeRate + '%'}]);
    cache.push(['Fatality rate', {v: fatalRate, f: fatalRate + '%'}]);
    cache.push(['Recovery rate', {v: recoveryRate, f: recoveryRate + '%'}]);
    cache.push(['Active cases', countryData['ActiveCases']]);
    cache.push(['Total cases', countryData['TotalCases']]);
    cache.push(['Total deaths', countryData['TotalDeaths']]);
    cache.push(['Total recovered', countryData['TotalRecovered']]);
    cache.push(['Total cases', countryData['TotalCases']]);
    cache.push(['Population', countryData['Population']]);

    setInfo(cache);
  }, []);

  return(
    <div>
      <h2>Covid-19 Data</h2>
      <Chart
        chartType="Table"
        width="100%"
        height="400px"
        data={info}
      />
    </div>

  );
};

export default CountryData;