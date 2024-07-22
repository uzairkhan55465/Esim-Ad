// src/AvailableEsims.js
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

const AvailableEsims = () => {
  const [esims, setEsims] = useState([]);

  useEffect(() => {
    // Using sample data for now
    const sampleData = [
      {
        id: 1,
        packageSize: "3 GB",
        company: "Company X",
        price: 5,
        isGift: false,
      },
      {
        id: 2,
        packageSize: "3 GB",
        company: "Company Y",
        price: 7,
        isGift: false,
      },
      {
        id: 3,
        packageSize: "10 GB",
        company: "Dealer",
        price: 10,
        isGift: true,
      },
      {
        id: 4,
        packageSize: "25 GB",
        company: "Company Z",
        price: 25,
        isGift: false,
      },
    ];

    setEsims(sampleData);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Available eSims</h1>
        <div className="overflow-x-auto bg-white p-4 rounded-md shadow-md">
          <table className="min-w-full bg-white border mt-3">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border">Package Size</th>
                <th className="py-2 px-4 border">Company</th>
                <th className="py-2 px-4 border">Price</th>
                <th className="py-2 px-4 border">Is Gift</th>
              </tr>
            </thead>
            <tbody>
              {esims.map((esim, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100`}
                >
                  <td className="py-2 px-4 border">{esim.packageSize}</td>
                  <td className="py-2 px-4 border">{esim.company}</td>
                  <td className="py-2 px-4 border">${esim.price}</td>
                  <td className="py-2 px-4 border">
                    {esim.isGift ? "Yes" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AvailableEsims;
