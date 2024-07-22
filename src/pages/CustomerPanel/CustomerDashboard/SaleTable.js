// src/components/SalesTable.js
import React from 'react';

const salesData = [
  { plan: '15GB', time: '16.06.2024 14:07:03', shop: 'Ihsan Gökçen' },
  // Add more data as needed
];

const SalesTable = () => {
  return (
    <table className="min-w-full bg-white rounded shadow mt-4 ">
      <thead>
        <tr>
          <th className="px-4 py-2">Data Plan</th>
          <th className="px-4 py-2">Time</th>
          <th className="px-4 py-2">Shop</th>
        </tr>
      </thead>
      <tbody>
        {salesData.map((sale, index) => (
          <tr key={index} className="bg-gray-100">
            <td className="px-4 py-2">{sale.plan}</td>
            <td className="px-4 py-2">{sale.time}</td>
            <td className="px-4 py-2">{sale.shop}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
