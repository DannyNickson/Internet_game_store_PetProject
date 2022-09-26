import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes,publicRoutes } from "./../routes/routes";

const AppRouter = () => {
  const isAuth = false;
  return (
    <Routes>
      {isAuth &&
        authRoutes.map((route) => (
          <Route
            element={<route.element />}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        ))}
        <Route path="/*" element={<Navigate to="/404" replace />} />
      {publicRoutes.map((route) => (
        <Route
          element={<route.element />}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
