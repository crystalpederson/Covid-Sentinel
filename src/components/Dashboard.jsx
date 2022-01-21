import React from 'react';
import WatchList from './WatchList';

const Dashboard = () => {

  const id = sessionStorage.getItem('id');
  
  return (
    <div className="bg-[#EBEBEB] p-6">
      <WatchList />
    </div>
  );
};


export default Dashboard;