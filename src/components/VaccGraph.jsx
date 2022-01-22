import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import axios from 'axios';
import Chart from 'react-google-charts';
import Loader from './Spinner';
import { vaccinationOptions } from '../utils/constants';


const VaccGraph = ({iso}) => {
  const [newCases, setNewCases] = useState([]);
  const [loading, setLoading] = useState(true);

  vaccinationOptions.params['iso'] = iso;

  useEffect(() =>{
    //on load, fetch data for selected country
        
    axios
      .request(vaccinationOptions)
      .then((response) => response.data)
      .then((data) => {
        const cache = [['Date', 'People Vaccinated per Hundred', 'People Fully Vaccinated per Hundred']];
        for(let i = data.length-180; i < data.length; i ++){
          const vaxxed = Number(data[i]['people_vaccinated_per_hundred']);
          const fullyVaxxed = Number(data[i]['people_fully_vaccinated_per_hundred']);
          if(vaxxed === 0 || fullyVaxxed ===0){
            continue;
          }
          cache.push([data[i]['date'], vaxxed, fullyVaxxed]);
        }
        setNewCases(cache);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const options = {
    hAxis: {
      title: 'Date',
    },
    vAxis: {
      title: '# of People Vaccinated Per Hundred',
    },

    legend: {position: 'right'}
  };


  return(
    <div id= 'line-graph'>
      { loading ? <Loader/> :
        <Chart
          height={'400px'}
          width={'800px'}
          chartType='LineChart'
          data={newCases}
          options={options}
        />
      }
    </div>
  );
};

export default VaccGraph;