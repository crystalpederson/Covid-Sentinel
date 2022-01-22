import React from 'react';
import WatchList from './WatchList';
import VaccGraph from './VaccGraph';
import News from './News';

const Dashboard = (props) => {
  const { ID, allData } = props;
  return (
    <div className='bg-[#EBEBEB] p-6'>
      <WatchList ID={ID} apiCountryData={allData} />
      <News />
    </div>
  );
};

export default Dashboard;
