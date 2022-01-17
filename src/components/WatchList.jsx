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

  useEffect(() => {
    getFaves(1);
  }, []);

  return (
    <div className="container w-full mx-auto md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
      <h3>Watch List</h3>
      <AddCountry />
      <CountryCard countries={countries} setCountries={setCountries}/>
    </div>
  )
}


export default WatchList;