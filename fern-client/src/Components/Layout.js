import React from "react"
import {Outlet} from "react-router-dom"
import Navbar from "./NavBar.js"
import Footer from "./Footer.js"

const Layout = () => {
  return (
    <div className="layout">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout