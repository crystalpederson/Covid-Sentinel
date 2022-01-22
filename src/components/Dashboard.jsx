import React from 'react';
import WatchList from './WatchList';
import VaccGraph from './VaccGraph';
import News from './News';

const Dashboard = ({ID}) => {
  return (
    <div className="bg-[#EBEBEB] p-6">
      <WatchList ID={ID}/>
      <News/>
    </div>
  )
}


export default Dashboard;