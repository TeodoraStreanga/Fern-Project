import React from "react"
import "../Styles/styles.js"
import {Link} from "react-router-dom"
import {FernLogo} from "../Assets/assets.js"
import {NavLink} from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">

        <Link to = "/" className = "nav-logo">
            <img className = "logo-icon" src= {FernLogo} alt="logo"></img>
            <span className = "logo-text">Fern</span>
        </Link>
        
      <ul className ="nav-links">
        <li><NavLink to = "/" className ="nav-item" activeClassName = "active" exact>Головна</NavLink></li>
        <li><NavLink to = "/About" className ="nav-item" activeClassName = "active" exact>Про нас</NavLink></li>
        <li><NavLink to = "/Menu" className ="nav-item" activeClassName = "active" exact >Меню</NavLink></li>
        <li><NavLink to = "/Contact" className ="nav-item" activeClassName = "active" exact>Контакти</NavLink></li>
        <li>
          <div className = "nav-options">
          <Link to = "/Menu"><button className = "nav-button">Замовити</button></Link>
          <Link to = "/Menu"><button className = "nav-cart"></button></Link>
          </div>
        </li>
      </ul>

    </div>
  );
}

export default NavBar;