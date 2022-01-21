import React from 'react';
import WatchList from './WatchList'

const Dashboard = ({ID}) => {
  return (
    <div className="bg-[#EBEBEB] p-6">
      <WatchList ID={ID}/>
    </div>
  )
}


export default Dashboard;