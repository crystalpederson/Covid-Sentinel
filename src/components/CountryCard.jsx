import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';
import Modal from 'react-modal';
import ModalContent from './ModalContent';
import object from '../utils/isoCodes';



const CountryCard = (props) => {
  const { countries, setCountries, ID, allData } = props;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [iso, setIso] = useState('');
  const [countryData, setCountryData] = useState({});



  const handleUnfavorite = (country, ID) => {
    const info = { country_name: country };

    // Send a DELETE request
    axios.delete(`/faves/${ID}`, { data: info })
      .then((res) => console.log(`Deleted ${country}`))
      // Filter the deleted country name out of the countries state
      .then(setCountries((countries) => countries.filter(word => word !== country)))
      .catch((err) => console.log('Error: could not delete country from favorites database', err));
  };

  const openModal = (country) =>{
    setSelectedCountry(country);
    console.log(country);
    console.log(allData[country]);
    setIso(object[country]);
    setCountryData(allData[country]);

    // var options = {
    //   method: 'GET',
    //   url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/${country}/${object[country].toLowerCase()}`,
    //   headers: {
    //     'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
    //     'x-rapidapi-key': process.env.VACCOVID_API_KEY
    //   }
    // };
        
    // axios.request(options)
    //   .then((res) => res.data)
    //   .then((data) => {
    //     setCountryData(data[0]);
    //     setIsOpen(true);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });

    //get rid of this after api is working and uncomment the above
    setIsOpen(true);
  };

  const closeModal = () =>{
    setIsOpen(false);
    setSelectedCountry('');
  };



  return (
    <>
      <div className="flex flex-wrap justify-center">
        {countries.map((country) => (
          <div key={country} className="bg-white box-content h-12 w-64 p-3 m-3 border rounded shadow" >
            <div className="grid grid-cols-3">
              <div className="pr-2">
                <div className="rounded p-3 bg-[#AEDADD]">Flag?</div>
              </div>
              <div className="col-span-2 text-center">
                <h5 className="font-bold uppercase text-2xl text-gray-500 tracking-wide" onClick={()=>openModal(country)}>{country}</h5>
                <div className="flex justify-around">
                  <div className="text-center">
                    <h3 className="font-bold text-sm">Active Cases: ??%</h3>
                  </div>
                  <div className="heart-icon">
                    <FaHeart 
                      color={countries.includes(country) ? '#C27120' : '#EBEBEB'} // dark red #800020
                      onClick={() => handleUnfavorite(country, {ID})}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Modal
          portalClassName="country-modal"
          isOpen={modalIsOpen} 
          onRequestClose={closeModal}
          style={{content:{background: '#FCF8F3'}}}
        >
          {/* put this modal content back when api is working */}
          {/* <ModalContent iso={iso} selectedCountry={selectedCountry} countryData={countryData} closeModal={closeModal}/> */}
          <ModalContent ID={ID} iso={iso} selectedCountry={selectedCountry} countryData={countryData} closeModal={closeModal}/>
        </Modal>
      </div>
    </>
  );
};


export default CountryCard;