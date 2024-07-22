// src/pages/Dashboard.js
import React from "react";
import Stats from "./Stats";
import Charts from "./DashboardCharts";
import SalesTable from "./SaleTable";
import PackagesTable from "./PackagesTable";
import StockCard from "./StockCards";
import Navbar from "../../../components/Navbar";

const CustomerDashboard = () => {
  return (
    <div className="">
      <Navbar />
      <Stats />
      <Charts />
      <SalesTable />
      <PackagesTable />
      <StockCard />
    </div>
  );
};

export default CustomerDashboard;
