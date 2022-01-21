import React from 'react';
import Chart from 'react-google-charts';

const Graph = () =>{
    const data = [
        ['x', 'y'],
        ['2022-01-01', 5000],
        ['2022-01-02', 6000],
        ['2022-01-03', 8000],
        ['2022-01-04', 3800]
]

const options = {
    hAxis: {
      title: 'Time',
    },
    vAxis: {
      title: 'Cases',
    },

    legend: {position: 'none'}
    // series: {
    //   1: { curveType: 'function' },
    // },
  }

    return(
        <div>
            <Chart
            width={'700px'}
            height={'500px'}
            chartType='LineChart'
            data={data}
            options={options}
            />
        </div>
    )
}

export default Graph;