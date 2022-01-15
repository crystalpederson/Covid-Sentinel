import React from 'react';
import AddCountry from './AddCountry';
import CountryCard from './CountryCard'


const WatchList = () => {
  return (
    <div className="container w-full mx-auto md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
      <h3>Watch List</h3>
      <AddCountry />
      <CountryCard />
    </div>
  )
}


export default WatchList;