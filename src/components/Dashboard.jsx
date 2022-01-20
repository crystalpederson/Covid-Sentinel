import React from 'react';
import WatchList from './WatchList'
import News from './News'

const Dashboard = () => {
  return (
    <div className="bg-[#EBEBEB] p-6">
      <WatchList />
      <News />
    </div>
  )
}


export default Dashboard;