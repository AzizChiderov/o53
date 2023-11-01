import { Outlet, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    if (location.pathname === "/basket") {
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
  }, [location.pathname]);

  return (
    <>
      {!hideHeader && <Header />}
      <Outlet />
    </>
  );
};

export default Layout;