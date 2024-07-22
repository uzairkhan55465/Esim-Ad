// src/Accounting.js
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

const Accounting = () => {
  const [data, setData] = useState([]);
  const [totals, setTotals] = useState({
    totalProducts: 0,
    totalCost: 0,
    totalSalesAmount: 0,
    totalProfit: 0,
  });

  useEffect(() => {
    // Using sample data for now
    const sampleData = [
      {
        id: 1,
        quantity: 10,
        cost: 100,
        salesAmount: 200,
        isErroneous: false,
        isGift: false,
      },
      {
        id: 2,
        quantity: 5,
        cost: 50,
        salesAmount: 100,
        isErroneous: false,
        isGift: true,
      },
      {
        id: 3,
        quantity: 8,
        cost: 80,
        salesAmount: 160,
        isErroneous: true,
        isGift: false,
      },
      {
        id: 4,
        quantity: 15,
        cost: 150,
        salesAmount: 300,
        isErroneous: false,
        isGift: false,
      },
    ];

    setData(sampleData);
    calculateTotals(sampleData);
  }, []);

  const calculateTotals = (data) => {
    let totalProducts = 0;
    let totalCost = 0;
    let totalSalesAmount = 0;
    let totalProfit = 0;

    data.forEach((item) => {
      if (item.isErroneous) return; // Skip erroneous items

      totalProducts += item.quantity;
      totalCost += item.cost + (item.isGift ? item.cost : 0); // Add cost for gift items
      totalSalesAmount += item.salesAmount;
    });

    totalProfit = totalSalesAmount - totalCost;

    setTotals({
      totalProducts,
      totalCost,
      totalSalesAmount,
      totalProfit,
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Accounting</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold">Total Products Sold</h2>
            <p className="text-2xl">{totals.totalProducts}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold">Total Cost</h2>
            <p className="text-2xl">${totals.totalCost.toFixed(2)}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold">Total Sales Amount</h2>
            <p className="text-2xl">${totals.totalSalesAmount.toFixed(2)}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold">Total Profit</h2>
            <p className="text-2xl">${totals.totalProfit.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accounting;
