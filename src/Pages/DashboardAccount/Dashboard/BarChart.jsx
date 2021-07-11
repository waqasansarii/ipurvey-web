import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June','July','Aug','Sep','Oct','Nov','Dec'],
  datasets: [
    {
      label: '# of Red Votes',
      data: [12, 19, 3, 5, 2, 3,7,4,9,14,16,5],
      backgroundColor: '#1F78B4',
    },
    {
      label: '# of Blue Votes',
      data: [2, 3, 20, 5, 1, 4,7,3,10,4,8,16],
      backgroundColor: '#73E9CC',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
}
};

const GroupedBar = () => (
  <>
    <Bar data={data} options={options} />
  </>
);

export default GroupedBar;