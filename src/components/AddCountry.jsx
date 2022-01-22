import React, { useState } from 'react';
import axios from 'axios';
import SearchDropdown from './SearchDropdown';
import iso from '../utils/isoCodes';

const AddCountry = (props) => {
  const { countries, setCountries, ID } = props;
  const [searchText, setSearchText] = useState('');
  const [allPossibleCountries, setAllPossibleCountries] = useState(
    Object.keys(iso)
  );
  const [foundCountries, setFoundCountries] = useState([]);

  const onSearchChange = (event) => {
    setSearchText(event.target.value);

    const searchResults = allPossibleCountries.filter((country_name) =>
      country_name.toLowerCase().startsWith(event.target.value.toLowerCase())
    );
    // console.log(searchResults);
    setFoundCountries(searchResults);
    // console.log(foundCountries);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Remember to store the user's id somewhere to be referenced
    const info = {
      country_name: searchText,
    };

    // Send a POST request
    axios
      .post(`/faves/${ID}`, info)
      .then((res) => {
        setCountries(() => [...countries, res.data]);
        console.log(`${info.country_name} added to database.`);
      })
      .catch((err) =>
        console.log('Error: could not post country to favorites database', err)
      );

    // Reset the content of text field after post
    setSearchText('');
  };

  return (
    <>
      <div className='grid grid-rows-1'>
        <div className='flex flex-row'>
          <input
            type='text'
            placeholder='Country Name'
            onChange={onSearchChange}
            value={searchText}
            className='h-10 w-45 text-lg text-gray-700 bg-gray-100 transition border border-2 focus:outline-none focus:border-[#DB996C] rounded py-1 px-2 pl-2 mr-1 leading-normal'></input>
          <button
            type='submit'
            onClick={handleSubmit}
            className='h-10 w-16 text-md text-gray-700 bg-gray-100 transition border border-2 focus:outline-none focus:border-[#DB996C] rounded py-1 px-2 pl-2 leading-normal'>
            Add
          </button>
        </div>
        <div>
          <SearchDropdown
            countries={foundCountries}
            setFoundCountries={setFoundCountries}
            setSearchText={setSearchText}
          />
        </div>
      </div>
    </>
  );
};

export default AddCountry;
