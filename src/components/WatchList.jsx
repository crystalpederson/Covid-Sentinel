import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddCountry from './AddCountry';
import CountryCard from './CountryCard';

const WatchList = ({ ID }) => {
  const [countries, setCountries] = useState([]);

  const getFaves = (id) => {
    // Send a GET request for all countries in favorites for user
    axios
      .get(`/faves/${id}`)
      .then((res) => res.data)
      .then((data) => {
        data.map((item) =>
          setCountries((countries) => [...countries, item.country_name])
        );
      })
      .catch((err) =>
        console.log('Error: could not post country to favorites database', err)
      );
  };

  // GET request for user's faves is done only when WatchList component is loaded
  useEffect(() => {
    getFaves(ID);
  }, []);

  return (
    <>
      <h3 className='font-bold text-2xl text-gray-600 ml-6'>
        Covid Watch List
      </h3>
      <div className='grid grid-cols-5'>
        <div className='col-span-4'>
          <div className='flex flex-row'>
            <CountryCard
              countries={countries}
              setCountries={setCountries}
              ID={ID}
            />
          </div>
        </div>
        <div className='col-span-1'>
          <div className='flex flex-row justify-between'>
            <AddCountry
              countries={countries}
              setCountries={setCountries}
              ID={ID}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchList;
