import React, { useState, useEffect } from 'react';
import NewsChild from './NewsChild';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// fetch data from the API
// when the data mounts, display it as a story
  //how do i want that story to display?

  // can i search through the site to see if that data has a specific country name?

  const story1 = {
    title: 'Covid-19 hospitalizations are dropping in the Northeast. In other parts of the country, they are rising',
    link: 'https://www.cnn.com/2022/01/22/health/us-coronavirus-saturday/index.html',
    imgURL: 'https://cdn.cnn.com/cnnnext/dam/assets/220121231823-01-covid-hospitalization-connecticut-exlarge-169.jpg',
    content: 'As cases seem to begin plateauing, Covid-19 hospitalizations in the Northeast are down by about 11% after reaching a peak about a week ago and have also dropped slightly -- about 6% -- in the Midwest region, according to data from the Department of Health and Human Services. And new Covid-19 hospital admissions are beginning to decline nationwide, a sign that total hospitalizations may soon begin going down too in every part of the country',
    source: 'CNN.com'
  }

  const story2 = {
    title: "Bill Maher torches Sotomayor for botching COVID facts: 'That's really ignorant for a Supreme Court justice'",
    link: 'https://www.foxnews.com/media/bill-maher-sonia-sotomayor-coronavirous-aoc-kyrie-irving',
    imgURL: 'https://www.foxnews.com/media/bill-maher-sonia-sotomayor-coronavirous-aoc-kyrie-irving',
    content: "Real Time host Bill Maher returned from his holiday break Friday and took aim at liberals for their responses to and handling of the coronavirus pandemic. Along the way, the HBO host commented on U.S. Rep. Alexandria Ocasio-Cortez, NBA player Kyrie Irving of the Brooklyn Nets and U.S. Supreme Court Justice Sonia Sotomayor. Maher kicked off the show's panel discussion by listing all the COVID restrictions the United Kingdom is lifting from mask mandates to vaccine passports, saying They're getting back to normal, we should follow this.",
    source: 'foxnews.com'  
  }
  const story3 = {
    title: 'Carhartt Stuck With Its Covid-19 Vaccine Mandate. The Backlash Ensued.',
    link: 'www.google.comhttps://www.wsj.com/articles/carhartt-stuck-with-its-covid-19-vaccine-mandate-the-backlash-ensued-11642733352',
    imgURL: 'https://images.wsj.net/im-471653?width=860&size=1.5023474178403755',
    content: 'The vast majority of Carharrt employees are fully vaccinated or are in the process of receiving their shots, the spokeswoman said. The company, which has more than 5,500 employees globally, also granted some accommodation requests for medical and religious reasons, she said. Carhartt, a family-owned company started in 1889 and run by the descendants of the companys founder, Hamilton Carhartt, is known for making blue-collar workwear. But in recent years, its heavy jackets and hats have become a favorite among actors and models.',
    source: 'wsj.com'
  }
  
  const story4 = {
    title: 'Coronavirus FAQ: What is the risk of catching omicron outdoors?',
    link: 'https://www.npr.org/sections/goatsandsoda/2022/01/21/1069904184/omicron-outdoor-transmission-risk',
    imgURL: 'https://media.npr.org/assets/img/2022/01/07/snowman-mask-getty-1230464351_custom-24f43c81a8a4268a53535587e322fdb096569e79-s800-c85.webp',
    content: "Studies conducted prior to omicron show that being outside greatly reduces your risk of infection with the coronavirus. One review of studies concluded that the odds of indoor transmission is almost 19 times higher than outdoor transmission. And in a study of 64 college football games during the 2020 season involving 1,190 athletes, researchers at Texas A&M University found zero spread of COVID during game play based on three postgame PCR tests over the course of a week — likely because of the outdoor setting and short duration of close contact, experts say. (Of course, football games have been postponed this season because of COVID outbreaks, but the study's authors believe that players were more likely spreading it in locker rooms and other shared indoor spaces.)", 
    source: 'npr.org'
  }
  
  const story5 = {
    title: 'the fifth story',
    link: 'www.google.com',
    content: 'if this was a story the content would be here. this is what the story would say. wow this is such an interesting story. how interesting this story is'  
  }
  
  const story6 = {
    title: 'the sixth story',
    link: 'www.google.com',
    content: 'if this was a story the content would be here. this is what the story would say. wow this is such an interesting story. how interesting this story is'  
  }
  
  const story7 = {
    title: 'the seventh story',
    link: 'www.google.com',
    content: 'if this was a story the content would be here. this is what the story would say. wow this is such an interesting story. how interesting this story is'  
  }
  
  const story8 = {
    title: 'the eithth story',
    link: 'www.google.com',
    content: 'if this was a story the content would be here. this is what the story would say. wow this is such an interesting story. how interesting this story is'  
  }
  
  const story9 = {
    title: 'the ninth story',
    link: 'www.google.com',
    content: 'if this was a story the content would be here. this is what the story would say. wow this is such an interesting story. how interesting this story is'  
  }
  
  const story10 = {
    title: 'the tenth story',
    link: 'www.google.com',
    content: 'if this was a story the content would be here. this is what the story would say. wow this is such an interesting story. how interesting this story is'  
  }
  
const News = () => {

  let allNotes;
const [state, setState] = useState([]); 
// get request to get the news

const getNews = () => {
  const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
    headers: {
      'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
      'x-rapidapi-key': '57ba5305b2msh94c110650576e2ap18eccajsnc1c80118e268'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    setState(response.data.news)
    console.log('request made?')
  }).catch(function (error) {
    console.error(error);
  });

}

// console.log( allNotes)
// getNews()

// getNews()

useEffect(() => {
  getNews()
  console.log('hi')
}, []);

console.log("STATE---->", state)


/// state[]= object name


const stories = [story1, story2, story3, story4, story4, story6, story7, story8, story9, story10];

// console.log(stories[0])

// map through stories 



console.log(stories);

// iterate through stories and render components 

const h1Styles = {
  fontSize: 20,
  fontWeight: 'bold',
  padding: 5
}

const pStyles = {
  fontSize: 13,
 
}

const sourceStyles = {
  fontSize: 10,
  fontStyle: 'italic',
  padding: 10
}
// story.title
// story.content
//story.link

  return (
    <div>
      <h1>News</h1>
      {stories.map(story => 
     <div>
       <h1 style = {h1Styles}>{story.title}</h1>
      <div> 
       <p style = {pStyles}>{story.content}</p>
       </div>
       <div>
       {/* <img
       src = {story.imgURL}
       alt = 'new'
       /> */}
       </div>
       <div>
         <p style = {sourceStyles}>{story.source}</p>
       </div>
     </div>  

     

      )} 

    </div>
  );

// return (
//     <div>
 


//     </div>
//   );
  
}
export default News;