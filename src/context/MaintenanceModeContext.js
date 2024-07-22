import React, { createContext, useContext, useState } from 'react';

// Create the context
const MaintenanceModeContext = createContext();

// Custom hook to use the MaintenanceModeContext
export const useMaintenanceMode = () => {
  return useContext(MaintenanceModeContext);
};

// Provider component
export const MaintenanceModeProvider = ({ children }) => {
  const [isUnderMaintenance, setIsUnderMaintenance] = useState(false);

  return (
    <MaintenanceModeContext.Provider value={{ isUnderMaintenance, setIsUnderMaintenance }}>
      {children}
    </MaintenanceModeContext.Provider>
  );
};
