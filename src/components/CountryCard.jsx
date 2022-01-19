import React from 'react';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';


const CountryCard = (props) => {
  const { countries, setCountries } = props;

  const handleUnfavorite = (country, id = 1) => {
    const info = { country_name: country };

    // Send a DELETE request
    axios.delete(`/faves/${id}`, { data: info })
      .then((res) => console.log(`Deleted ${country}`))
      // Filter the deleted country name out of the countries state
      .then(setCountries((countries) => countries.filter(word => word !== country)))
      .catch((err) => console.log("Error: could not delete country from favorites database", err))
  }

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {countries.map((country) => (
          <div key={country} className="bg-white box-content h-12 w-64 p-3 m-3 border rounded shadow">
            <div className="grid grid-cols-3">
              <div className="pr-2">
                <div className="rounded p-3 bg-[#AEDADD]">Flag?</div>
              </div>
              <div className="col-span-2 text-center">
                <h5 className="font-bold uppercase text-2xl text-gray-500 tracking-wide">{country}</h5>
                <div className="flex justify-around">
                  <div className="text-center">
                    <h3 className="font-bold text-sm">Active Cases: ??%</h3>
                  </div>
                  <div className="">
                    <FaHeart 
                      color={countries.includes(country) ? "#C27120" : "#EBEBEB"} // dark red #800020
                      onClick={() => handleUnfavorite(country)}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}


export default CountryCard;