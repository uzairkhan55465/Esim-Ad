import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Mainlayout";
import Dashboard from "./pages/dashboard/Dashboard";
import FinancialDashboard from "./pages/financal-dashboard/financialDashboard";
import Companies from "./pages/DealerManagement/Companies";
import AllUsers from "./pages/usermanagement/AllUsers";
import AddUser from "./pages/usermanagement/addUsers";
import SalesReports from "./pages/reports/SalesReports";
import SalesReturn from "./pages/reports/SalesReturn";
import Accounting from "./pages/reports/Accounting";
import AvailableEsims from "./pages/EsimManagement/AvailableEsims";
import NewEsimPackages from "./pages/EsimManagement/NewEsimPackage";
import Settings from "./pages/Settings/Setting";
import MaintenanceMode from "./pages/Settings/MaintenanceMode";
import CustomerManagement from "./pages/Customersmanagment/CusmtomerManagement";
import AddCustomers from "./pages/Customersmanagment/AddCustomers";
import CompanyCards from "./pages/Customersmanagment/CompanyCards";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoutes";
import "./App.css";
import Banner from "./components/Banner";
import { useMaintenanceMode } from "./context/MaintenanceModeContext";
import CustomerDashboard from "./pages/CustomerPanel/CustomerDashboard/CustomerDashboard";
import DataPlans from "./pages/CustomerPanel/EsimSale/DataPlansCards";
import OrderNow from "./pages/CustomerPanel/Orders/Orders";
import CustomerProfile from "./pages/CustomerPanel/CustomerProfiles";

function App() {
  const { isUnderMaintenance } = useMaintenanceMode();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log(isAuthenticated, "isAuthenticated");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const mockDataAdmin = {
    userName: "Admin",
    password: "Admin",
  };

  const mockDataCustomer = {
    userName: "Customer",
    password: "Customer",
  };

  return (
    <Router>
      {isUnderMaintenance && isAuthenticated === "Customer" ? (
        <Banner />
      ) : (
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                setUsername={setUsername}
                setPassword={setPassword}
                username={username}
                password={password}
                mockDataAdmin={mockDataAdmin}
                mockDataCustomer={mockDataCustomer}
              />
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            {/* Customer Routes */}
            {isAuthenticated === "Customer" ? (
              <>
                <Route index element={<CustomerDashboard />} />
                <Route path="/Esim-sale" element={<DataPlans />} />
                <Route path="/orders" element={<OrderNow />} />
                <Route path="/customer-profile" element={<CustomerProfile />} />
                <Route path="reports/sales-report" element={<SalesReports />} />
                <Route path="reports/sales-return" element={<SalesReturn />} />
              </>
            ) : (
              <>
                <Route index element={<Dashboard />} />

                <Route
                  path="financial-dashboard"
                  element={<FinancialDashboard />}
                />

                <Route
                  path="customer-management"
                  element={<CustomerManagement />}
                />
                <Route
                  path="customer-management/add-customer"
                  element={<AddCustomers />}
                />
                <Route
                  path="customer-management/all-customers"
                  element={<CustomerManagement />}
                />

                <Route path="reports/sales-report" element={<SalesReports />} />
                <Route path="reports/sales-return" element={<SalesReturn />} />

                <Route
                  path="reports/sales-accounting"
                  element={<Accounting />}
                />
                <Route
                  path="esim-management/available-esims"
                  element={<AvailableEsims />}
                />
                <Route
                  path="esim-management/new-esims-packages"
                  element={<NewEsimPackages />}
                />
                <Route path="settings/settings" element={<Settings />} />
                <Route
                  path="settings/maintenance-mode"
                  element={<MaintenanceMode />}
                />
              </>
            )}

            {/* Admin Routes */}
          </Route>
        </Routes>
      )}
    </Router>
  );
}

export default App;
