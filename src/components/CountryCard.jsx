import React from 'react';


const CountryCard = () => {
  const countries = ['USA', 'South Africa', 'Japan', 'Boliva', 'Jordan'];

  return (
    <>
      <div className="flex flex-wrap w-full p-3">
        {countries.map((country) => (
          <div className="bg-white border rounded shadow p-2 m-4">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pr-6">
                <div class="rounded p-3 bg-green-600">Flag?</div>
              </div>
              <div class="flex-1 text-right md:text-center">
                  <h5 class="font-bold uppercase text-xl text-gray-500">{country}</h5>
                  <div>
                    
                    <h3 class="font-bold text-sm">Covid Cases #</h3>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}


export default CountryCard;