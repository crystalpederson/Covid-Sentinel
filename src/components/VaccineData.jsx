import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import { vaccinationOptions } from '../utils/constants';
import Loader from './Spinner';


var cssClassNames = {
  'tableCell': 'table-cell',
};

const options = {
  'cssClassNames': cssClassNames
};



const VaccineData = ({iso}) => {
  const [ covidData, setCovidData ] = useState([]);
  const [ source, setSource ] = useState('');
  const [loading, setLoading] = useState(true);

  vaccinationOptions.params['iso'] = iso;

  useEffect(() => {
    
    axios
      .request(vaccinationOptions)
      .then((response) => response.data)
      .then((data) => data[data.length-1])
      .then((data) => {
        setSource(`Data from ${data['source_name']}.  Updated ${data['date']}.`);

        const cache = [['','']];
        cache.push(['% of population vaccinated', {v: data['people_vaccinated_per_hundred'], f: data['people_vaccinated_per_hundred'] + '%'}]);
        cache.push(['% of population fully vaccinated', {v: data['people_fully_vaccinated_per_hundred'], f: data['people_fully_vaccinated_per_hundred']+'%'}]);
        cache.push(['Total people vaccinated', Math.round(data['people_vaccinated'])]);
        cache.push(['Total people fully vaccinated', Math.round(data['people_fully_vaccinated'])]);
        cache.push(['Type of vaccines', data['vaccines']]);
        setCovidData(cache);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      { loading ? <Loader/> :
        <div>
        <Chart
          chartType="Table"
          width="100%"
          data={covidData}
          options={options}
        />
        <p id='source'>{source}</p>
        </div>
      }
    </div>
  );
};

export default VaccineData;
