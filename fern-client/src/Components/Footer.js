import React from "react"
import "../Styles/styles.js"
import {Link} from "react-router-dom"
import Logo from "./Logo.js"
import {Facebook, Twitter, Instagram} from "../Assets/assets.js"

function Footer() {
  return (
    <div className="footer">
      
      <Logo></Logo>

      <div className = "footer-panel-frame">
        <div className = "footer-navigation-panel">
            <span className = "footer-panel-header">Навігація</span>
            <ul className ="foot-links">
              <li><Link to = "/" className = "foot-item link">Головна</Link></li>
              <li><Link to = "/About" className ="foot-item link">Про нас</Link></li>
              <li><Link to = "/Menu" className ="foot-item link">Меню</Link></li>
              <li><Link to = "/Contact" className ="foot-item link">Контакти</Link></li>
            </ul>
        </div>
        <div className = "footer-contact-panel">
            <span className = "footer-panel-header">Контакти</span>
            <ul className ="foot-links">
              <li className = "foot-item">
                <div className = "foot-icon location"></div>
                <span> вул. Високий Замок, 1, 79008, Львів, Україна</span>
              </li>
              <li className = "foot-item">
                <div className = "foot-icon time"></div>
                <span>
                  Понеділок - П'ятниця, 8:00 AM - 22:00 PM <br/>
                  Субота - Неділя, 8:00 AM - 20:00 PM
                </span>
              </li>
              <li className = "foot-item">
                <div className = "foot-icon phone"></div>
                <span>+ 380(66) 302 21 67</span>
              </li>
              <li className = "foot-item">
                <div className = "foot-icon mail"></div>
                <span>info@ferncafe.com</span>
              </li>
            </ul>
        </div>
        <div className = "footer-social-panel">
            <ul className ="foot-links icons">
              <li><img className = "social-icon" src = {Facebook} alt = " "></img></li>
              <li><img className = "social-icon" src = {Twitter} alt = " "></img></li>
              <li><img className = "social-icon" src = {Instagram} alt = " "></img></li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;