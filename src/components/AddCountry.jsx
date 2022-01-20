import React, { useState } from 'react';
import axios from 'axios';


const AddCountry = (props) => {
  
  const { countries, setCountries } = props;
  const [searchText, setSearchText] = useState('');

  const onSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event, id = 1) => {
    event.preventDefault();

    // Remember to store the user's id somewhere to be referenced
    const info = {
      country_name: searchText,
    };

    // Send a POST request
    axios.post(`/faves/${id}`, info)
      .then((res) => {
        setCountries(() => [...countries, res.data]);
        console.log(`${info.country_name} added to database.`);
      })
      .catch((err) => console.log('Error: could not post country to favorites database', err));

    // Reset the content of text field after post
    setSearchText('');
  };

  return (
    <>
      <div className="flex flex-row justify-end mr-6">
        <input 
          type="text"
          placeholder="Country Name" 
          onChange={onSearchChange}
          value={searchText}
          className="text-lg text-gray-700 bg-gray-100 transition border border-2 focus:outline-none focus:border-[#DB996C] rounded py-1 px-2 pl-2 mr-1 leading-normal"></input>
        <button 
          type="submit" 
          onClick={handleSubmit}
          className="text-md text-gray-700 bg-gray-100 transition border border-2 focus:outline-none focus:border-[#DB996C] rounded py-1 px-2 pl-2 leading-normal">
            Add
        </button>
      </div>
    </>
  );
};


export default AddCountry;