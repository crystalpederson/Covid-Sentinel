import React, { useState } from 'react';


const AddCountry = () => {

  const [searchText, setSearchText] = useState("");

  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchText);
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