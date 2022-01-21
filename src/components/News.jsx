import React, { useState, useEffect } from 'react';
import axios from 'axios';


// fetch data from the API
// when the data mounts, display it as a story
  //how do i want that story to display?

  // can i search through the site to see if that data has a specific country name?
const News = () => {

 
  useEffect (() => {

    console.log('hi')

//     const options = {
//         method: 'GET',
//         url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0',
//         headers: {
//           'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
//           'x-rapidapi-key': '57ba5305b2msh94c110650576e2ap18eccajsnc1c80118e268'
//         }
//       };
    
//   axios.request(options).then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });

});

return (
    <div>
        <h1>test</h1>

    </div>
  );

}
export default News;