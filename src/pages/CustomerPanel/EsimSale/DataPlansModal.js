// src/components/DataPlanCard.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const DataPlanCard = ({ plan }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-xl font-bold text-center text-blue-500">{plan.size}</h2>
      <p className="text-center text-gray-700 mt-2">Duration: {plan.duration}</p>
      <p className="text-center text-gray-700">Scope: {plan.scope}</p>
      <button
        onClick={() => setShowModal(true)}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Get QR Code
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <QRCode value={plan.size} size={256} />
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataPlanCard;
