// src/Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
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
                <p className="pt-2 pb-2 text-[12px]">Admin</p>
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

        <li
          className="px-6 py-2 hover:bg-gray-700 cursor-pointer"
          onClick={() => setCustomerManagementOpen(!isCustomerManagementOpen)}
        >
          <div>
            <div className="flex items-center justify-between ">
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
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>
                <span className="ps-3 pe-3 text-[13px]">
                  {" "}
                  Customer Management
                </span>
              </div>
              {isCustomerManagementOpen === true ? (
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
          </div>
          {isCustomerManagementOpen && (
            <ul className="pl-4 space-y-2 mt-4">
              <li className="py-2 hover:bg-gray-600 cursor-pointer text-[13px]">
                <Link className="ps-2" to="/customer-management/all-customers">
                  Customers
                </Link>
              </li>
              <li className="py-2 hover:bg-gray-600 cursor-pointer text-[13px]">
                <Link className="ps-2" to="/customer-management/add-customer">
                  Add Customer
                </Link>
              </li>
            </ul>
          )}
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
                <Link to="/reports/sales-return">Sales Return</Link>
              </li>
              <li className="py-2 hover:bg-gray-600 cursor-pointer text-[13px]">
                <Link to="/reports/sales-accounting">Accounting</Link>
              </li>
            </ul>
          )}
        </li>
        <li
          className="px-6 py-2 hover:bg-gray-700 cursor-pointer"
          onClick={() => setPackageManagementOpen(!isPackageManagementOpen)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>

              <div className="ps-3 text-[13px]">Esim Management</div>
            </div>

            {isPackageManagementOpen === true ? (
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
          {isPackageManagementOpen && (
            <ul className="pl-4 space-y-2 mt-4">
              <li className="py-2 hover:bg-gray-600 cursor-pointer text-[13px]">
                <Link to="/esim-management/available-esims">
                  Available eSims
                </Link>
              </li>
              <li className="py-2 hover:bg-gray-600 cursor-pointer text-[13px]">
                <Link to="/esim-management/new-esims-packages">
                  New Esim Package
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li
          className="px-6 py-2 hover:bg-gray-700 cursor-pointer"
          onClick={() => setSettingsOpen(!isSettingsOpen)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>

              <div className="ps-3 text-[13px]">Settings</div>
            </div>

            {isSettingsOpen === true ? (
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
          {isSettingsOpen && (
            <ul className="pl-4 space-y-2 mt-4">
              <li className="py-2 hover:bg-gray-600 cursor-pointer text-[13px]">
                <Link to="/settings/settings">Settings</Link>
              </li>
              <li className="py-2 hover:bg-gray-600 cursor-pointer text-[13px]">
                <Link to="">Payment Getaways</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
