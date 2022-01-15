import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import { covidOptions, countryCodeToName } from '../utils/constants';
import Loader from './Spinner';
import { Link, useNavigate } from 'react-router-dom';
import Table from './Table';
import VaccineMap from './VaccineMap'



const CovidMap = () => {
  const [covidData, setCovidData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiKey, setApiKey] = useState('');
  const [iso, setIso] = useState('');
  const [allData, setAllData] = useState({});
  const [countryClicked, setCountryClicked] = useState(false);

  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get('/keys').then((res) => {
      setApiKey(res.data.key);
    });
  }, []);

  useEffect(() => {
    axios
      .request(covidOptions)
      .then((response) => response.data)
      .then((data) => {
        setAllData(data);
        
        const cache = data.map((el) => {
          const percentInfected = Math.round((el.ActiveCases / el.Population) * 1000) || 0;
          return [countryCodeToName[el.Country] || el.Country, percentInfected];
        });
        cache.unshift(['Country', 'Active Cases per 1000 people']);

        
        setCovidData(cache);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const options = {
    colorAxis: { colors: ['#AEDADD', '#F3E0AA', '#DB996C'], maxValue: 100 },
    datalessRegionColor: 'lightgray',
    backgroundColor: '#FCF8F3',
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <h1>Click on a Country to see the latest info</h1>
      { loading ? <Loader/> :
        <Chart 
          chartEvents={[
            {
              eventName: 'select',
              callback: ({ chartWrapper }) => {
                
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const region = covidData[selection[0].row + 1];
                const iso = allData[selection[0].row]['ThreeLetterSymbol'].toUpperCase();
                console.log(iso)
                setIso(iso);
                setCountryClicked(true);
                //navigate('/country', {state: { Country: region[0] }});
              },
            },
          ]}
          chartType="GeoChart"
          width="100%"
          height="60vh"
          data={covidData}
          options={options}
          mapsApiKey={apiKey}
        />
      }
      {countryClicked &&
          <Table iso={iso}/>
      }

      


    </div>
  );
};

export default CovidMap;
