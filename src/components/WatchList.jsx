import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddCountry from './AddCountry';
import CountryCard from './CountryCard'


const WatchList = () => {
  const [ countries, setCountries ] = useState([]);

  const getFaves = (id) => {
    // Send a GET request for all countries in favorites for user
    axios.get(`/faves/${id}`)
      .then((res) => res.data)
      .then((data) => {
        data.map((item) => setCountries((countries) => [...countries, item.country_name]))
      })
      .catch((err) => console.log("Error: could not post country to favorites database", err))
  }

  // GET request for user's faves is done only when WatchList component is loaded
  useEffect(() => {
    getFaves(1);
  }, []);

  return (
    <>
      <div className="flex flex-row justify-between">
        <h3 className="font-bold text-2xl text-gray-600 ml-6">Covid Watch List</h3>
        <AddCountry countries={countries} setCountries={setCountries} />
      </div>
      <div className="flex flex-row">
        <CountryCard countries={countries} setCountries={setCountries}/>
      </div>
    </>
      
  )
}


export default WatchList;