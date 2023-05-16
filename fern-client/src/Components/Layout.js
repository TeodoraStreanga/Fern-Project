import React from "react"
import {Outlet} from "react-router-dom"
import Navbar from "./NavBar.js"

const Layout = () => {
  return (
    <div className="layout">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout