import React from "react"
import "../Styles/styles.js"
import {Link} from "react-router-dom"
import {FernLogo} from "../Assets/assets.js"

function NavBar() {
  return (
    <div className="navBar">

        <Link to = "/" className = "nav-logo">
            <img className = "logo-icon" src= {FernLogo} alt="logo"></img>
            <span className = "logo-text">Fern</span>
        </Link>
        
      <ul className ="nav-links">
        <li><Link to = "/" className ="nav-item">Головна</Link></li>
        <li><Link to = "/About" className ="nav-item">Про нас</Link></li>
        <li><Link to = "/Menu" className ="nav-item">Меню</Link></li>
        <li><Link to = "/Contact" className ="nav-item">Контакти</Link></li>
        <li>
          <div className = "nav-options">
          <Link to = "/Menu"><button className = "nav-order">Замовити</button></Link>
          <Link to = "/Menu"><button className = "nav-cart"></button></Link>
          </div>
        </li>
      </ul>

    </div>
  );
}

export default NavBar;