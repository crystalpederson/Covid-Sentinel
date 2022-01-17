import React, { useState } from 'react';
import axios from 'axios';


const AddCountry = () => {
  const [searchText, setSearchText] = useState("");

  const onSearchChange = (event) => {
    setSearchText(event.target.value);
    console.log(searchText);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Remember to store the user's id somewhere to be referenced
    const info = {
      id: 1,
      country_name: searchText,
    }

    // Send a POST request
    axios.post(`/faves/${info.id}`, info)
      .then((res) => console.log(`${info.country_name} added to database.`))
      .catch((err) => console.log("Error: could not post country to favorites database", err))

    // Reset the content of text field after post
    setSearchText("");
  }

  return (
    <>
      <div className="flex flex-row justify-end">
        <input 
          type="text"
          placeholder="Country Name" 
          onChange={onSearchChange}
          value={searchText}
          className="text-md text-gray-700 bg-gray-100 transition border focus:outline-none focus:border-gray-700 rounded py-1 px-2 pl-2 leading-normal"></input>
        <button 
          type="submit" 
          onClick={handleSubmit}
          className="text-md text-gray-700 bg-gray-100 transition border focus:outline-none focus:border-gray-700 rounded py-1 px-2 pl-2 leading-normal">
            Add
        </button>
      </div>
    </>
  )
}


export default AddCountry;