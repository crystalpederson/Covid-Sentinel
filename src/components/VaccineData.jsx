import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import { vaccinationOptions } from '../utils/constants';

const options = {
  allowHtml: true,
  backgroundColor: '#E4E4E4',
};

const formatters = [
  {
    column: [0, 1],
    options: '<a href="mailto:{1}">{0}</a>',
  },
];

const VaccineData = ({iso}) => {
  const [ covidData, setCovidData ] = useState([]);
  const [ source, setSource ] = useState('');

  vaccinationOptions.params['iso'] = iso;

  useEffect(() => {
    
    axios
      .request(vaccinationOptions)
      .then((response) => response.data)
      .then((data) => data[data.length-1])
      .then((data) => {
        setSource(`Data from ${data['source_name']}.  Updated ${data['date']}.`);

        const cache = [['','']];
        // for (const property in data) {
        //   const capitalizedString = `${property[0].toUpperCase()}${property.slice(1)}`;
        //   const formattedString = capitalizedString.replaceAll(/_/g, ' ');
        //   cache.push([formattedString, data[property]]);
        // }
        cache.push(['% of population vaccinated', {v: data['people_vaccinated_per_hundred'], f: data['people_vaccinated_per_hundred'] + '%'}]);
        cache.push(['% of population fully vaccinated', {v: data['people_fully_vaccinated_per_hundred'], f: data['people_fully_vaccinated_per_hundred']+'%'}]);
        cache.push(['Total people vaccinated', Math.round(data['people_vaccinated'])]);
        cache.push(['Total people fully vaccinated', Math.round(data['people_fully_vaccinated'])]);
        cache.push(['Type of vaccines', data['vaccines']]);
        setCovidData(cache);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Vaccination Data</h2>
      <Chart
        chartType="Table"
        width="100%"
        height="400px"
        data={covidData}
        options={options}
        formatters={formatters}
      />
    </div>
  );
};

export default VaccineData;
