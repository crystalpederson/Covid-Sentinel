import React from 'react';
import FaveCountry from './FaveCountry';
import CountryData from './CountryData';
import VaccineData from './VaccineData';
import CovidGraph from './CovidGraph';

const ModalContent = ({iso, selectedCountry, closeModal, countryData, ID}) => {

  return(
    <div className="modal-content">

      <div className="modal-header">
        <button type="button" className="close" id='modal-close-button' onClick={closeModal}>
          <span aria-hidden="true">&times;</span>
          <span className="sr-only"></span>
        </button>
      </div>
        
      <div className="modal-body">
        <div className="modal-title">
          <h1 className='country-name'>{selectedCountry}</h1>
          <FaveCountry ID={ID} selectedCountry={selectedCountry}/>
        </div>
        <div id='country-tables'>
          {/* <div className='covid-table'>
            <h2 className='chart-title'>Covid-19 Data</h2>
            <CountryData  countryData={countryData}/>
          </div> */}
          <div className='vacc-table'>
            <h2 className='chart-title'>Vaccine Data</h2>
            <VaccineData  iso={iso}/>
          </div>              
        </div>

        {/* <div className='covid-graph'>
          <h2 className='chart-title'>Number of New Cases Per Day</h2>
          <CovidGraph  iso={iso}/>
        </div> */}
            
      </div>

    </div>
  );
};

export default ModalContent;