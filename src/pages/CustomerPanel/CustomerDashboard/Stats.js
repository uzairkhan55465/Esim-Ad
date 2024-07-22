// src/components/Stats.js
import React from 'react';

const stats = [
  { title: 'Active', value: 28 },
  { title: 'Sales', value: 0 },
  { title: 'Incorrect', value: 1 },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {stats.map((stat) => (
        <div key={stat.title} className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-bold">{stat.title}</h2>
          <p className="text-2xl">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
