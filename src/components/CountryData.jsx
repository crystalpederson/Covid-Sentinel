import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { Chart } from 'react-google-charts';


const CountryData = ({countryData}) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const cache = [['','']];


    const activeRate = (countryData.cases.active/countryData.population*100).toFixed(2);
    const fatalRate = (countryData.deaths.total/countryData.population*100).toFixed(2);
    const recoveryRate = (countryData.cases.recovered/countryData.population*100).toFixed(2);

    cache.push(['% of population with active cases', {v: activeRate, f: activeRate + '%'}]);
    cache.push(['Fatality rate', {v: fatalRate, f: fatalRate + '%'}]);
    cache.push(['Recovery rate', {v: recoveryRate, f: recoveryRate + '%'}]);
    cache.push(['Active cases', countryData.cases.active]);
    cache.push(['Total cases', countryData.cases.total]);
    cache.push(['Total deaths', countryData.deaths.total]);
    cache.push(['Total recovered', countryData.cases.recovered]);
    cache.push(['Population', countryData.population]);

    // const fatalRate = (countryData['TotalDeaths']/countryData['TotalCases']*100).toFixed(2);
    // const recoveryRate = (countryData['TotalRecovered']/countryData['TotalCases']*100).toFixed(2);
    // const activeRate = (countryData['ActiveCases']/countryData['Population']*100).toFixed(2);
    
    // cache.push(['% of population with active cases', {v: activeRate, f: activeRate + '%'}]);
    // cache.push(['Fatality rate', {v: fatalRate, f: fatalRate + '%'}]);
    // cache.push(['Recovery rate', {v: recoveryRate, f: recoveryRate + '%'}]);
    // cache.push(['Active cases', countryData['ActiveCases']]);
    // cache.push(['Total cases', countryData['TotalCases']]);
    // cache.push(['Total deaths', countryData['TotalDeaths']]);
    // cache.push(['Total recovered', countryData['TotalRecovered']]);
    // cache.push(['Total cases', countryData['TotalCases']]);
    // cache.push(['Population', countryData['Population']]);

    setInfo(cache);
  }, []);

  var cssClassNames = {
    'tableCell': 'table-cell'
  };

  const options ={
    'cssClassNames': cssClassNames
  };

  return(
    <div>
      <Chart
        chartType="Table"
        width="100%"
        data={info}
        options={options}
      />
    </div>

  );
};

export default CountryData;