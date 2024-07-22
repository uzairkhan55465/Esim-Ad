// src/components/Charts.js
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const lineData = {
  labels: ['2024-06-27', '2024-06-28'],
  datasets: [
    {
      label: 'Sales',
      data: [2, 5],
      borderColor: 'blue',
      backgroundColor: 'blue',
      fill: false,
    },
  ],
};

const barData = {
  labels: ['15GB', '10GB'],
  datasets: [
    {
      label: 'By Data Plan',
      data: [3, 1],
      backgroundColor: 'purple',
    },
  ],
};

const Charts = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="p-4 bg-white rounded shadow">
        <Line data={lineData} />
      </div>
      <div className="p-4 bg-white rounded shadow">
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default Charts;
