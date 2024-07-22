// src/NewEsimPackage.js
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

const NewEsimPackage = () => {
  const [allEsims, setAllEsims] = useState([]);
  const [availableEsims, setAvailableEsims] = useState([]);

  useEffect(() => {
    // Simulated data fetch for all eSims in the BNESIM app
    const fetchAllEsims = async () => {
      const sampleData = [
        { id: 1, packageSize: "3 GB", price: 5 },
        { id: 2, packageSize: "5 GB", price: 8 },
        { id: 3, packageSize: "10 GB", price: 15 },
        { id: 4, packageSize: "20 GB", price: 25 },
      ];
      setAllEsims(sampleData);
    };

    fetchAllEsims();
  }, []);

  const addEsim = (esim) => {
    setAvailableEsims([...availableEsims, esim]);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">New eSim Package</h1>
        <div className="overflow-x-auto bg-white p-4 rounded-md shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">All eSims in BNESIM</h2>
          <table className="min-w-full bg-white border mt-3">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border">Package Size</th>
                <th className="py-2 px-4 border">Price</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {allEsims.map((esim, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100`}
                >
                  <td className="py-2 px-4 border">{esim.packageSize}</td>
                  <td className="py-2 px-4 border">${esim.price}</td>
                  <td className="py-2 px-4 border">
                    <button
                      onClick={() => addEsim(esim)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Add
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Available eSims</h2>
          <table className="min-w-full bg-white border mt-3">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border">Package Size</th>
                <th className="py-2 px-4 border">Price</th>
              </tr>
            </thead>
            <tbody>
              {availableEsims.map((esim, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100`}
                >
                  <td className="py-2 px-4 border">{esim.packageSize}</td>
                  <td className="py-2 px-4 border">${esim.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default NewEsimPackage;
