import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddCountry from './AddCountry';
import CountryCard from './CountryCard';


const WatchList = ({ID}) => {
  const [ countries, setCountries ] = useState([]);
  const [countryData, setCountryData] = useState({});
  const [allData, setAllData] = useState({});
  const [covidData, setCovidData] = useState([]);

  const getFaves = (id) => {
    // Send a GET request for all countries in favorites for user
    axios.get(`/faves/${id}`)
      .then((res) => res.data)
      .then((data) => {
        data.map((item) => setCountries((countries) => [...countries, item.country_name]));
      })
      .catch((err) => console.log('Error: could not post country to favorites database', err));
  };

  // GET request for user's faves is done only when WatchList component is loaded
  useEffect(() => {
    getFaves(ID);


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
      })
      .catch(function (error) {
        console.error(error);
      });
    //temporary fix end

  }, []);

  

  return (
    <>
      <div id='watchlist'>
        <div className="flex flex-row justify-between">
          <h3 className="font-bold text-2xl text-gray-600 ml-6">Covid Watch List</h3>
          <AddCountry countries={countries} setCountries={setCountries} ID={ID}/>
        </div>
        <div className="flex flex-row">
          <CountryCard countries={countries} allData={allData} setCountries={setCountries} ID={ID}/>
        </div>
      </div>
    </>
      
  );
};


export default WatchList;