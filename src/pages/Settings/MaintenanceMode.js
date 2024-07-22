import React, { useState } from "react";

const MaintenanceMode = () => {
  const [maintenanceMode, setMaintenanceMode] = useState(true); // Toggle this based on maintenance mode status

  if (!maintenanceMode) {
    return null; // Render nothing if maintenance mode is off
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Under Maintenance</h2>
        <p className="text-gray-700 mb-4">
          We are currently performing maintenance. Please check back later.
        </p>
        <p className="text-gray-700">
          For urgent assistance, please contact us via WhatsApp at{" "}
          <span className="font-semibold">+1234567890</span>.
        </p>
      </div>
    </div>
  );
};

export default MaintenanceMode;
