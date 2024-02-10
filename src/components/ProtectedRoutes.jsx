import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { queryClient } from "../lib/queryClient";

function ProtectedRoutes() {
  const user = queryClient.getQueryData(["user"]);

  if (window.location.pathname === "/create") {
    if (user?.role === "user") {
      return <Outlet />;
    } else if (user?.role === "admin") {
      return <Navigate to="/dashboard" />;
    } else {
      return <Navigate to="/login" />;
    }
  }

  if (
    window.location.pathname === "/dashboard" ||
    window.location.pathname === "/settings"
  ) {
    if (user?.role === "admin") {
      return <Outlet />;
    } else if (user?.role === "user") {
      return <Navigate to="/create" />;
    } else {
      return <Navigate to="/login" />;
    }
  }
}

export default ProtectedRoutes;
