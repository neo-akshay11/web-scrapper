import React from "react";
import { Navigate } from "react-router-dom";
import "/Users/akshay/Desktop/internship project copy/frontend/src/styles.css"
const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  // Redirect to login if no token is found
  if (!token) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default AdminRoute;