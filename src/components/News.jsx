import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// fetch data from the API
// when the data mounts, display it as a story
//how do i want that story to display?

// can i search through the site to see if that data has a specific country name?

// const newArray= [];

const story1 = {
  title:
    'Covid-19 hospitalizations are dropping in the Northeast. In other parts of the country, they are rising',
  link: 'https://www.cnn.com/2022/01/22/health/us-coronavirus-saturday/index.html',
  imgURL:
    'https://cdn.cnn.com/cnnnext/dam/assets/220121231823-01-covid-hospitalization-connecticut-exlarge-169.jpg',
  content:
    'As cases seem to begin plateauing, Covid-19 hospitalizations in the Northeast are down by about 11% after reaching a peak about a week ago and have also dropped slightly -- about 6% -- in the Midwest region, according to data from the Department of Health and Human Services. And new Covid-19 hospital admissions are beginning to decline nationwide, a sign that total hospitalizations may soon begin going down too in every part of the country',
  source: 'CNN.com',
};

const story2 = {
  title:
    "Bill Maher torches Sotomayor for botching COVID facts: 'That's really ignorant for a Supreme Court justice'",
  link: 'https://www.foxnews.com/media/bill-maher-sonia-sotomayor-coronavirous-aoc-kyrie-irving',
  imgURL:
    'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/11/1862/1048/Bari-Weiss.jpg?ve=1&tl=1',
  content:
    "Real Time host Bill Maher returned from his holiday break Friday and took aim at liberals for their responses to and handling of the coronavirus pandemic. Along the way, the HBO host commented on U.S. Rep. Alexandria Ocasio-Cortez, NBA player Kyrie Irving of the Brooklyn Nets and U.S. Supreme Court Justice Sonia Sotomayor. Maher kicked off the show's panel discussion by listing all the COVID restrictions the United Kingdom is lifting from mask mandates to vaccine passports, saying They're getting back to normal, we should follow this.",
  source: 'foxnews.com',
};
const story3 = {
  title:
    'Carhartt Stuck With Its Covid-19 Vaccine Mandate. The Backlash Ensued.',
  link: 'https://www.wsj.com/articles/carhartt-stuck-with-its-covid-19-vaccine-mandate-the-backlash-ensued-11642733352',
  imgURL: 'https://images.wsj.net/im-471653?width=860&size=1.5023474178403755',
  content:
    'The vast majority of Carharrt employees are fully vaccinated or are in the process of receiving their shots, the spokeswoman said. The company, which has more than 5,500 employees globally, also granted some accommodation requests for medical and religious reasons, she said. Carhartt, a family-owned company started in 1889 and run by the descendants of the companys founder, Hamilton Carhartt, is known for making blue-collar workwear. But in recent years, its heavy jackets and hats have become a favorite among actors and models.',
  source: 'wsj.com',
};

const story4 = {
  title: 'Coronavirus FAQ: What is the risk of catching omicron outdoors?',
  link: 'https://www.npr.org/sections/goatsandsoda/2022/01/21/1069904184/omicron-outdoor-transmission-risk',
  imgURL:
    'https://media.npr.org/assets/img/2022/01/07/snowman-mask-getty-1230464351_custom-24f43c81a8a4268a53535587e322fdb096569e79-s800-c85.webp',
  content:
    "Studies conducted prior to omicron show that being outside greatly reduces your risk of infection with the coronavirus. One review of studies concluded that the odds of indoor transmission is almost 19 times higher than outdoor transmission. And in a study of 64 college football games during the 2020 season involving 1,190 athletes, researchers at Texas A&M University found zero spread of COVID during game play based on three postgame PCR tests over the course of a week — likely because of the outdoor setting and short duration of close contact, experts say. (Of course, football games have been postponed this season because of COVID outbreaks, but the study's authors believe that players were more likely spreading it in locker rooms and other shared indoor spaces.)",
  source: 'npr.org',
};

const story5 = {
  title:
    'NY COVID Case Rates, Hospital Admissions Plunge — But State Not Budging on Masks Yet',
  link: 'https://www.nbcnewyork.com/news/coronavirus/omicron-variant-infection-ny-covid-cases-peak-kathy-hochul-mask-mandate/3506620/',
  imgURL:
    'https://media.nbcnewyork.com/2022/01/covid-positive-change.png?w=544',
  content:
    "It's no secret why. COVID-19 hospitalizations are consistently trending down in New York, with the governor -- who identified that metric as most concerning to her when omicron-fueled cases started to skyrocket in December -- reporting a state total of 11,016 on Friday. That's down 12% from the omicron peak just 10 days ago.The share of new COVID positive hospital admissions in the densest regions downstate -- New York City, Long Island and Mid-Hudson, which also have the highest adult full vaccination rates per capita in the state -- declined by 20% at minimum over the last seven days, Hochul said. Those three regions are fueling the overall statewide decrease (-20.8%) on that metric over the last three weeks.",
  source: 'nbcny.com',
};

const story6 = {
  title: 'Some Central Texas schools closed Monday due to COVID-19',
  link: 'https://www.kxan.com/news/education/some-central-texas-schools-closed-monday-due-to-covid-19/',
  imgURL:
    'https://www.kxan.com/wp-content/uploads/sites/40/2022/01/SchoolBusGettyImages-1216371553.jpg?w=876&h=493&crop=1',
  content:
    'CENTRAL TEXAS (KXAN) — Staff shortages are leading to school closures across the state, as well as here in Central Texas, as the omicron variant continues to drive case counts up. Here are the upcoming school closures that have been announced in the Central Texas area so far.Lexington ISD Lexington ISD said all schools and offices would be closed Monday, Jan. 24 due to COVID-19. The district said during the closure, all classrooms and student areas will be deep cleaned and/or disinfected. ',
  source: 'kxan.com',
};

const story7 = {
  title: "There's now a phone line to order your free at-home COVID tests",
  link: 'www.google.comhttps://www.npr.org/2022/01/21/1074815001/free-covid-test-kits-phone-number',
  imgURL:
    'https://media.npr.org/assets/img/2022/01/21/ap_22019600106032_custom-553fb750188ca418e745f035e5e23e0f6372506b-s800-c85.webp',
  content:
    'The Biden administration on Friday opened a phone line for people to order free at-home COVID-19 tests. The phone number — 1-800-232-0233 — follows the launch earlier this week of a website to order the tests, and is available for those who may have difficulty accessing the internet or need additional help to place their orders. According to the White House, the phone line is open from 8 a.m. to midnight ET seven days a week, and offers assistance in more than 150 languages.',
  source: 'npr.org',
};

const News = () => {
  let allNotes;
  const [state, setState] = useState([]);
  // get request to get the news

  const getNews = () => {
    const options = {
      method: 'GET',
      url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
      headers: {
        'x-rapidapi-host':
          'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'x-rapidapi-key': '57ba5305b2msh94c110650576e2ap18eccajsnc1c80118e268',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setState(response.data.news);
        // console.log('request made?');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // console.log( allNotes)
  // getNews()

  // getNews()

  useEffect(() => {
    getNews();
    // console.log('hi');
  }, []);

  // console.log('STATE---->', state);

  /// state[]= object name

  const stories = [story1, story2, story3, story4, story4, story6, story7];

  // console.log(stories[0])

  // map through stories

  console.log(stories);

  // iterate through stories and render components

  const h1Styles = {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  };

  const pStyles = {
    fontSize: 13,
  };

  const sourceStyles = {
    fontSize: 10,
    fontStyle: 'italic',
    padding: 10,
  };
  // story.title
  // story.content
  //story.link

  return (
    <div className='news-feed'>
      <h1 className='font-bold text-2xl text-gray-600 ml-6'>Recent News</h1>
      {stories.map((story) => (
        <div className='news-story'>
          <div className='img-container'>
            <img className='news-picture' src={story.imgURL} alt='new' />
          </div>

          <div className='newsInfo'>
            <h1 style={h1Styles}>{story.title}</h1>
            <p style={pStyles}>{story.content}</p>
            <a style={sourceStyles} href={story.link}>
              {story.source}
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  // return (
  //     <div>

  //     </div>
  //   );
  //testing to change
};
export default News;
