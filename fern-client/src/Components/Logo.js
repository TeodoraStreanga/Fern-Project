import React from "react"
import "../Styles/styles.js"
import {FernLogo} from "../Assets/assets.js"

function Logo() {
  return (
    <div className = "logo">
            <img className = "logo-icon" src= {FernLogo} alt="logo"></img>
            <span className = "logo-text">Fern</span>
    </div>
  );
}

export default Logo;