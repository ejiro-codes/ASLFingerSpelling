import React from "react";
import { Outlet, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

//Outlet helps to render child components
const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
