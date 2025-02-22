import React from "react";
import MenuAppBar from "../component/AppBar/MenuAppBar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";
const Root: React.FC = () => {
  return (
    <>
      <MenuAppBar />
      <Outlet />
        <Footer />
    </>
  );
};

export default Root;
