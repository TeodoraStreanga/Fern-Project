import React from "react"
import "../Styles/styles.js"
import {Link} from "react-router-dom"
import {NavLink} from "react-router-dom"
import Logo from "./Logo.js"

function NavBar() {
  return (
    <div className="navBar">

    <Link to = "/" style ={{textDecoration:"none"}}><Logo></Logo></Link>
        
      <ul className ="nav-links">
        <li><NavLink to = "/" className ="nav-item" activeclassname = "active" exact = "true">Головна</NavLink></li>
        <li><NavLink to = "/About" className ="nav-item" activeclassname = "active" exact = "true">Про нас</NavLink></li>
        <li><NavLink to = "/Menu" className ="nav-item" activeclassname = "active" exact = "true">Меню</NavLink></li>
        <li><NavLink to = "/Contact" className ="nav-item" activeclassname = "active" exact = "true">Контакти</NavLink></li>
        <li>
          <div className = "nav-options">
          <NavLink to = "/Menu"><button className = "nav-button">Бронювати</button></NavLink>
          <NavLink to = "/Menu"><button className = "nav-cart"></button></NavLink>
          </div>
        </li>
      </ul>

    </div>
  );
}

export default NavBar;