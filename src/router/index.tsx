import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routerConfig from "../config/routerConfig";
import type { DefineRoute } from "../interface/router";
import NotFound from "../pages/notFound";
import { getItemFromLocalStorage } from "../utils/storage";

const RouteApp: React.FC = () => {
  const user = getItemFromLocalStorage("user");

  return (
    <Routes>
      {routerConfig().map((route: DefineRoute) => {
        const Element = <route.Element />;

        if (route.private && !user) {
          return (
            <Route
              key={route.Path}
              path={route.Path}
              element={<Navigate to="/login" replace />}
            />
          );
        }

        if (!route.private && user) {
          return (
            <Route
              key={route.Path}
              path={route.Path}
              element={<Navigate to="/deudas" replace />}
            />
          );
        }

        return <Route key={route.Path} path={route.Path} element={Element} />;
      })}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteApp;
