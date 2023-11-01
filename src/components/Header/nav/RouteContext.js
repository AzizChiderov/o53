import React, { createContext, useContext, useState } from "react";

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [selectedRoute, setSelectedRoute] = useState("salads");

  const setRoute = (route) => {
    setSelectedRoute(route);
  };

  return (
    <RouteContext.Provider value={{ selectedRoute, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRoute = () => {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error("useRoute must be used within a RouteProvider");
  }
  return context;
};