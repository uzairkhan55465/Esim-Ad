// src/components/CustomerManagement.js
import React, { useState, useEffect } from "react";
// import { customersData } from './customersData'; // Assume this is your data source
import { CustomersData } from "../../constant/CustomerManagement";
import Navbar from "../../components/Navbar";

const CustomerManagement = () => {
  const [customers, setCustomers] = useState(CustomersData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <Navbar />
      <h1 className="text-xl font-bold mb-4">Customer Management</h1>
      <input
        type="text"
        placeholder="Search by company name or email"
        value={searchTerm}
        onChange={handleSearch}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Company Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Balance</th>
            <th className="py-2 px-4 border-b">Total Sales</th>
            <th className="py-2 px-4 border-b">Last Sale Date</th>
            <th className="py-2 px-4 border-b">Date Created</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr key={customer.id}>
              <td className="py-2 px-4 border-b">{customer.companyName}</td>
              <td className="py-2 px-4 border-b">{customer.email}</td>
              <td className="py-2 px-4 border-b">{customer.status}</td>
              <td className="py-2 px-4 border-b">{customer.balance}</td>
              <td className="py-2 px-4 border-b">{customer.totalSales}</td>
              <td className="py-2 px-4 border-b">{customer.lastSaleDate}</td>
              <td className="py-2 px-4 border-b">{customer.dateCreated}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerManagement;
