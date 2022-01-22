import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';

const FaveCountry = ({selectedCountry, ID}) =>{

  const [favorited, setFavorited] = useState(false);
  
  //currently hard coded to user 1
  const id = ID;
  
  //check if current country is in the user's favorites
  //get their favorites from the database
  //see if the current country matches a favorite
  useEffect(() => {
    getFaves(id);
  }, []);

  const getFaves = (id) => {
    // Send a GET request for all countries in favorites for user
    axios.get(`/faves/${id}`)
      .then((res) => res.data)
      .then((data) => {
        checkMatch(data);
      })
      .catch((err) => console.log(err));
  };

  const checkMatch = (data) => {
    data.forEach((el) => {
      if(el['country_name'] === selectedCountry){
        setFavorited(true);
      }
    });
  };

  const unFave = (id) => {
    const data = { country_name: selectedCountry };

    axios.delete(`/faves/${id}`, { data: data})
      .then((res) => console.log(`Deleted ${selectedCountry}`))
      .then(setFavorited(false))
      .catch((err) => console.log(err));
  };

  const Fave = () => {
    const data = { country_name: selectedCountry };

    axios.post(`/faves/${id}`, data)
      .then((res) => console.log(`Added ${selectedCountry}`))
      .then(setFavorited(true))
      .catch((err) => console.log(err));
    
  };

  const handleFave = () =>{
    favorited ? unFave() : Fave();
  };

  return(
    <div className="heart-icon" onClick={handleFave}>
      {favorited ? <FaHeart color = {'#C27120'}/> : <FiHeart/>}
    </div>
  );

};


export default FaveCountry;