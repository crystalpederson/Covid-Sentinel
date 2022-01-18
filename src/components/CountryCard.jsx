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
      <div className="flex flex-wrap w-full p-3">
        {console.log('Countries for re-rendering', countries)}
        {countries.map((country) => (
          <div key={country} className="bg-white border rounded shadow p-2 m-4">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-6">
                <div className="rounded p-3 bg-green-600">Flag?</div>
              </div>
              <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-xl text-gray-500">{country}</h5>
                  <div>
                    <div className="flex flex-row items-center">
                      <h3 className="font-bold text-sm pr-2">CovidCases%</h3>
                        <FaHeart 
                          color={countries.includes(country) ? "rgb(128, 0, 32)" : "rgb(74, 85, 104)"}
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