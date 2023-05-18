import React from "react"
import "../Styles/styles.js"
import {Facebook, Twitter, Instagram} from "../Assets/assets.js"
import {Link} from "react-router-dom"

function HomePage() {
  return (
    <div className="home-page">
      <div className = "header home">
        
        <div className = "header-block">
          <span className = "header-title">Ласкаво просимо у Fern!</span>
          <span className = "header-title subtitle">Найзеленіше кафе у місті</span>
          <ul className ="header-icons">
                <li><img className = "social-icon" src = {Facebook} alt = " "></img></li>
                <li><img className = "social-icon" src = {Twitter} alt = " "></img></li>
                <li><img className = "social-icon" src = {Instagram} alt = " "></img></li>
          </ul>
        </div>
      </div>
      <div className = "home-panel">
          <div className = "home-title">Про нас</div>
          <div className = "home-text">
            Fern - затишний куточок природи у великому місті. Натхнені природою, ми робимо все щоб наші відвідувачі почували себе роpcлаблено
          </div>
          
          <div className = "option-panels">
            <div className = "option-panel booking">
              <div className = "option-panel-title"> Чарівна атмосфера чекає!</div>
              <Link to = "/Menu"><button className = "nav-button">Бронювати</button></Link>
            </div>

            <div className = "option-panel order">
              <div className = "option-panel-title">Скуштуйте найкращі з наших страв сьогодні!</div>
              <Link to = "/Menu"><button className = "nav-button">Меню</button></Link>
            </div>
          </div>
      </div>
      
    </div>
  );
}

export default HomePage;