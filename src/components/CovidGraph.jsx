import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import axios from 'axios';
import Chart from 'react-google-charts';
import Loader from './Spinner';


const CovidGraph = ({iso}) => {
  const [newCases, setNewCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    //on load, fetch data for selected country
    var options = {
      method: 'GET',
      url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/${iso}`,
      headers: {
        'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'x-rapidapi-key': process.env.VACCOVID_API_KEY
      }
    };
        
    axios.request(options)
      .then((res) => res.data)
      .then((data) => {
        const cache = [['Date', 'Number of New Cases']];
        data.forEach((el) => {
          cache.push([el.date, el.new_cases]);
        });

        //format data correctly to send
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
      title: '# of New Cases',
    },

    legend: {position: 'none'}
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

export default CovidGraph;