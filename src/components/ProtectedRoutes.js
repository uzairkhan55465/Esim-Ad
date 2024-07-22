// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Check if the user is authenticated

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
