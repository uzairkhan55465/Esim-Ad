// src/MainLayout.js
import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import CustomerSidebar from "./CustomerSidebar";

const MainLayout = () => {
  const AuthName = localStorage.getItem("isAuthenticated");
  console.log(AuthName, "AuthName");
  return (
    <>
      <div className="flex">
        {AuthName === "Admin" ? (
          <>
            <Sidebar />
          </>
        ) : (
          <>
            <CustomerSidebar />
          </>
        )}

        <div className="ml-64 p-6 w-full h-auto ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
