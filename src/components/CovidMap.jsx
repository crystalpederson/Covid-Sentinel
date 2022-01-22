import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import { covidOptions, countryCodeToName } from '../utils/constants';
import Loader from './Spinner';
import Modal from 'react-modal';
import ModalContent from './ModalContent';
import object from '../utils/isoCodes';


const CovidMap = ({ID}) => {
  const [covidData, setCovidData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiKey, setApiKey] = useState('');
  const [iso, setIso] = useState('');
  const [allData, setAllData] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryData, setCountryData] = useState({});
  
  useEffect(() => {
    axios.get('/keys').then((res) => {
      setApiKey(res.data.key);
    });
  }, []);

  useEffect(() => {
    // axios
    //   .request(covidOptions)
    //   .then((response) => response.data)
    //   .then((data) => {
    //     setAllData(data);
        
    //     const cache = data.map((el) => {
          
    //       const infectedPerThou = Math.round((el.ActiveCases / el.Population) * 1000) || 0;
    //       return [countryCodeToName[el.Country] || el.Country, infectedPerThou, el.ActiveCases];
    //     });
    //     cache.unshift(['Country', 'Active cases per 1000 people', 'Total number of active cases']);

        
    //     setCovidData(cache);
    //     setLoading(false);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });

    //temporary fix
    var options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/statistics',
      headers: {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': '9fa7052cc4msh1f61e1c37e16f0bp10048ejsn1cd3ea3c1c0a'
      }
    };


    axios.request(options)
      .then((response) => response.data)
      .then((data) => {
        setAllData(data.response);
        const countryInfo = data.response;
        const allCountryData = {};

        const cache = [['Country', 'Active cases per 1000 people', 'Total number of active cases']];
        for(let i = 0; i <countryInfo.length; i++){
          if(countryInfo[i]['country'].includes('-')){
            continue;
          }
          const infectedPerThou = Math.round((countryInfo[i]['cases']['active'] / countryInfo[i]['population']) * 1000) || 0;
          cache.push([countryInfo[i]['country'], infectedPerThou, countryInfo[i]['cases']['active']]);
          
          allCountryData[countryInfo[i]['country']] = countryInfo[i];
        }
        setAllData(allCountryData);
        setCovidData(cache);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
    //temporary fix end

  }, []);

  const openModal = () =>{
    setIsOpen(true);
  };

  const closeModal = () =>{
    setIsOpen(false);
    setSelectedCountry('');
  };

  const options = {
    colorAxis: { colors: ['#AEDADD', '#F3E0AA', '#DB996C'], minValue: 0, maxValue: 100 },
    datalessRegionColor: 'lightgray',
    backgroundColor: '#FCF8F3',
  };


  return (
    <div className='flex flex-col min-h-screen'>
      <h1 id='map-title'>Click on a country below to view Covid-19 data</h1>
      { loading ? <Loader/> :
        <Chart 
          chartEvents={[
            {
              eventName: 'select',
              callback: ({ chartWrapper }) => {
                // const chart = chartWrapper.getChart();
                // const selection = chart.getSelection();
                // if (selection.length === 0) return;
                // console.log(selection[0].row)
                // const iso = allData[selection[0].row]['ThreeLetterSymbol'].toUpperCase();
                // setIso(iso);
                // setSelectedCountry(allData[selection[0].row]['Country']);
                // setCountryData(allData[selection[0].row]);
                // openModal();
                
                //temp fix
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const countryName = covidData[selection[0].row + 1][0];
                setCountryData(allData[countryName]);
                const iso = object[countryName];
                setIso(iso);
                setSelectedCountry(countryName);
                openModal();
                // const iso = allData[selection[0].row]['ThreeLetterSymbol'].toUpperCase();
                // setIso(iso);
                // setSelectedCountry(allData[selection[0].row]['Country']);
                // setCountryData(allData[selection[0].row]);
                // openModal();
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

      <Modal 
        portalClassName="country-modal"
        isOpen={modalIsOpen} 
        onRequestClose={closeModal}
        style={{content:{background: '#FCF8F3'}}}
      >
        <ModalContent ID={ID} iso={iso} selectedCountry={selectedCountry} countryData={countryData} closeModal={closeModal}/>
       
      </Modal>


    </div>
  );
};

export default CovidMap;
