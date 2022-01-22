import React from 'react';
import WatchList from './WatchList';
import VaccGraph from './VaccGraph';

const Dashboard = ({ID}) => {
  return (
    <div className="bg-[#EBEBEB] p-6">
      <WatchList ID={ID}/>
    </div>
  )
}


export default Dashboard;