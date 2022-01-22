import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

import axios from 'axios';
import { covidOptions, countryCodeToName } from '../utils/constants';

import NavBar from './Navbar';
import Footer from './Footer';
import Signup from './Signup';
import Login from './login';
import CovidMap from './CovidMap';
import About from './About';
import Dashboard from './Dashboard';

const App = () => {
  const [ID, setID] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const id = Cookies.get('ssid');
    if (id) {
      const numId = parseInt(id);
      setLoggedIn(true);
      setID(numId);
    }
  }, []);

  const [covidData, setCovidData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiKey, setApiKey] = useState('');
  const [iso, setIso] = useState('');
  const [allData, setAllData] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    axios.get('/keys').then((res) => {
      setApiKey(res.data.key);
    });
  }, []);

  useEffect(() => {
    //temporary fix
    var options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/statistics',
      headers: {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': '9fa7052cc4msh1f61e1c37e16f0bp10048ejsn1cd3ea3c1c0a',
      },
    };

    axios
      .request(options)
      .then((response) => response.data)
      .then((data) => {
        setAllData(data.response);
        const countryInfo = data.response;
        const allCountryData = {};

        const cache = [
          [
            'Country',
            'Active cases per 1000 people',
            'Total number of active cases',
          ],
        ];
        for (let i = 0; i < countryInfo.length; i++) {
          if (countryInfo[i]['country'].includes('-')) {
            continue;
          }
          const infectedPerThou =
            Math.round(
              (countryInfo[i]['cases']['active'] /
                countryInfo[i]['population']) *
                1000
            ) || 0;
          cache.push([
            countryInfo[i]['country'],
            infectedPerThou,
            countryInfo[i]['cases']['active'],
          ]);

          allCountryData[countryInfo[i]['country']] = countryInfo[i];
        }
        setAllData(allCountryData);
        setCovidData(cache);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
    //temporary fix end
  }, []);

  if (!loggedIn) {
    return (
      <div>
        <NavBar loggedIn={loggedIn} />
        <Routes>
          <Route exact path='/' element={<Signup />}>
            {' '}
          </Route>
          <Route exact path='/signup' element={<Signup />}>
            {' '}
          </Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>

        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <NavBar loggedIn={loggedIn} />
        <Routes>
          <Route
            exact
            path='/'
            element={<Dashboard ID={ID} countryData={allData} />}></Route>
          <Route
            path='/home'
            element={<Dashboard ID={ID} countryData={allData} />}></Route>
          <Route
            path='/worldmap'
            element={
              <CovidMap
                covidData={covidData}
                setCovidData={setCovidData}
                loading={loading}
                setLoading={setLoading}
                apiKey={apiKey}
                setApiKey={setApiKey}
                iso={iso}
                setIso={setIso}
                allData={allData}
                selAllData={setAllData}
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
                countryData={countryData}
                setCountryData={setCountryData}
                ID={ID}
              />
            }></Route>
          <Route path='/about' element={<About />}>
            {' '}
          </Route>
        </Routes>
        <Footer />
      </div>
    );
  }
};

export default App;
