import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import axios from 'axios';


const CovidGraph = ({iso}) => {
  const [rawData, setRawData] = useState([]);
  const [newCases, setNewCases] = useState([]);

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
        setRawData(data);

        const cache = [];
        data.forEach((el) => {
          cache.push({x: el.date, y: el.new_cases});
        });
        console.log(cache);

        //format data correctly to send
        setNewCases(cache);

      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);



  return(
    <div>
      <h1> Graph</h1>
      
    </div>
  );
};

export default CovidGraph;