// src/components/DataPlans.js
import React from "react";
import DataPlanCard from "./DataPlansModal";
import Navbar from "../../../components/Navbar";

const dataPlans = [
  { size: "3GB", duration: "30 days", scope: "Turkey" },
  { size: "5GB", duration: "30 days", scope: "Turkey" },
  { size: "10GB", duration: "30 days", scope: "Turkey" },
  { size: "15GB", duration: "30 days", scope: "Turkey" },
  { size: "20GB", duration: "30 days", scope: "Turkey" },
];

const DataPlans = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
        {dataPlans.map((plan, index) => (
          <DataPlanCard key={index} plan={plan} />
        ))}
      </div>
    </>
  );
};

export default DataPlans;
