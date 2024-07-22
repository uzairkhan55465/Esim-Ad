// src/pages/Settings/Settings.js
import React, { useState } from "react";
import { useMaintenanceMode } from "../../context/MaintenanceModeContext";
import Navbar from "../../components/Navbar";

const Settings = () => {
  const { isUnderMaintenance, setIsUnderMaintenance } = useMaintenanceMode();
  const [settings, setSettings] = useState({
    metaTitle: "",
    metaDescription: "",
    phoneNumbers: "",
    emailAddress: "",
    whatsappSupport: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({
      ...settings,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Save the settings (e.g., send to API)
    console.log("Settings saved:", settings);
  };

  const handleMaintenanceToggle = () => {
    setIsUnderMaintenance((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold mb-4">Settings</h1>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isUnderMaintenance}
              onChange={handleMaintenanceToggle}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Maintenance Mode
            </span>
          </label>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">General</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="metaTitle">
              Meta Title
            </label>
            <input
              type="text"
              id="metaTitle"
              name="metaTitle"
              value={settings.metaTitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="metaDescription">
              Meta Description
            </label>
            <textarea
              id="metaDescription"
              name="metaDescription"
              value={settings.metaDescription}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phoneNumbers">
              Phone Numbers
            </label>
            <input
              type="text"
              id="phoneNumbers"
              name="phoneNumbers"
              value={settings.phoneNumbers}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="emailAddress">
              Email Address
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={settings.emailAddress}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="whatsappSupport">
              WhatsApp Support
            </label>
            <input
              type="text"
              id="whatsappSupport"
              name="whatsappSupport"
              value={settings.whatsappSupport}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save Settings
          </button>
        </div>
      </div>
    </>
  );
};

export default Settings;
