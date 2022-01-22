import React from 'react';

const SearchDropdown = (props) => {
  const { countries, setFoundCountries, setSearchText } = props;

  const handleSubmit = (country) => {
    setSearchText(country);
    setFoundCountries([]);
  };

  return (
    <div className='mt-1'>
      <ul className='divide-y-2 divide-gray-100'>
        {countries.slice(0, 4).map((country) => (
          <li
            className='bg-white rounded-lg shadow-lg h-10 hover:bg-[#DB996C] hover:text-black mb-1'
            key={country}>
            <button
              type='submit'
              onClick={() => handleSubmit(country)}
              className='pt-2 pb-2 pl-2 pr-20'>
              {country}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchDropdown;
