// src/components/CompanyCard.js
import React from 'react';

const CompanyCard = ({ company }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">{company.name}</h3>
        <button className="text-gray-400">...</button>
      </div>
      <p><strong>Situation:</strong> <span className={company.situation === 'Active' ? 'text-green-500' : 'text-red-500'}>{company.situation}</span></p>
      <p><strong>Segment:</strong> {company.segment}</p>
      <p><strong>Phone:</strong> {company.phone}</p>
      <p><strong>Email:</strong> {company.email}</p>
      <p><strong>Entry:</strong> {company.entry}</p>
    </div>
  );
};

export default CompanyCard;
