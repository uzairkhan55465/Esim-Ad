// src/Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CustomerSidebar = () => {
  const [isDealerManagementOpen, setDealerManagementOpen] = useState(false);
  const [isUserManagementOpen, setUserManagementOpen] = useState(false);
  const [isCustomerManagementOpen, setCustomerManagementOpen] = useState(false);
  const [isReportsOpen, setReportsOpen] = useState(false);
  const [isPackageManagementOpen, setPackageManagementOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  return (
    <div className="w-[270px] h-screen bg-gray-800 text-white fixed">
      <div class=" w-full  flex flex-col justify-center items-center p-4">
        <div class="bg-gray-900 text-white w-full max-w-md flex flex-col rounded-xl shadow-lg pt-4 pb-4 ps-3 pe-3">
          <div class="flex items-center justify-center">
            <div class="flex items-center justify-center space-x-4">
              <div class=" text-center">
                <p className="pt-2 pb-2 text-[18px]">Kemal Can Tuncer</p>
                <p className="pt-2 pb-2 text-[12px]">Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <ul className="space-y-4">
        <li className="px-6 py-2 hover:bg-gray-700">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <Link className="ps-3 text-[13px] " to="/">
              Dashboard
            </Link>
          </div>
        </li>
        <li className="px-6 py-2 hover:bg-gray-700">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <Link className="ps-3 text-[13px] " to="/Esim-sale">
              eSim Sales
            </Link>
          </div>
        </li>
        <li className="px-6 py-2 hover:bg-gray-700">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <Link className="ps-3 text-[13px] " to="/customer-profile">
              Profile
            </Link>
          </div>
        </li>

        <li
          className="px-6 py-2 hover:bg-gray-700 cursor-pointer"
          onClick={() => setReportsOpen(!isReportsOpen)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                />
              </svg>
              <div className="ps-3 text-[13px]">Reports</div>
            </div>
            {isReportsOpen === true ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </>
            )}
          </div>
          {isReportsOpen && (
            <ul className="pl-4 space-y-2 mt-4">
              <li className="py-2 hover:bg-gray-600 cursor-pointer text-[13px]">
                <Link to="/reports/sales-report">Sales Reports</Link>
              </li>
              <li className="py-2 hover:bg-gray-600 cursor-pointer text-[13px]">
                <Link to="/reports/sales-return">Other Reports</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default CustomerSidebar;
