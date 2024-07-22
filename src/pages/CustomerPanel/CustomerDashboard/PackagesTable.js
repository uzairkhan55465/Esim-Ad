// src/components/PackagesTable.js
import React from 'react';

const packageData = [
  { package: '3GB', stock: 5, sold: 'one', incorrect: 0, active: 4 },
  // Add more data as needed
];

const PackagesTable = () => {
  return (
    <table className="min-w-full bg-white rounded shadow mt-4 mb-4">
      <thead>
        <tr>
          <th className="px-4 py-2">Package</th>
          <th className="px-4 py-2">Stock</th>
          <th className="px-4 py-2">Sold</th>
          <th className="px-4 py-2">Incorrect</th>
          <th className="px-4 py-2">Active</th>
        </tr>
      </thead>
      <tbody>
        {packageData.map((pkg, index) => (
          <tr key={index} className="bg-gray-100">
            <td className="px-4 py-2">{pkg.package}</td>
            <td className="px-4 py-2">{pkg.stock}</td>
            <td className="px-4 py-2">{pkg.sold}</td>
            <td className="px-4 py-2">{pkg.incorrect}</td>
            <td className="px-4 py-2">{pkg.active}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PackagesTable;
