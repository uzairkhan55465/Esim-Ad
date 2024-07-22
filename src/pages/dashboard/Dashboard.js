// src/pages/Dashboard.js
import React from "react";
import DashboardCards from "./DashboardCards";
import SalesCards from "./SalesCards";
import Navbar from "../../components/Navbar";
const Dashboard = () => {
  return (
    <div className="">
      <Navbar />
      <hr className="mt-3 mb-8 text-[#fff] bg-[#fff] p-[1.5px]" />
      <DashboardCards />
      <SalesCards />
    </div>
  );
};

export default Dashboard;
