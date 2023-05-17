import React from "react"
import "../Styles/styles.js"
import {Green1, Green2, Green3, Green4, Green5} from "../Assets/assets.js"

function AboutPage() {
  return (
    <div className="about-page">
      
      <div className = "header"></div>
      
      <div className = "about-panel">

        <div className = "about-block">
          <img className = "about-image" src = {Green5} alt = ""></img>

          <div className = "about-text-block">
            <div className = "about-title">Про нас</div>
            <div className = "about-text">
              Fern - це куточок природи серед міста, яка надає атмосферу спокою та затишку для відвідувачів. Маленька ідея, натхнена природою яка розрослася до цілого кафе у чарівному місті Львів.
            </div>
            <div className = "about-text">
              Яскраві квіти та рослини, а також найпопулярніші та насмачніші страви української кухні і не тільки - основа для магії Fern.
            </div>
          </div>
          
        </div>
        <div className = "gallery-panel">
          <div className = "about-title">Галерея</div>
          <ul className = "gallery">
            <li><img className = "gallery-image" src ={Green1} alt = ""></img></li>
            <li><img className = "gallery-image" src ={Green2} alt = ""></img></li>
            <li><img className = "gallery-image" src ={Green3} alt = ""></img></li>
            <li><img className = "gallery-image" src ={Green4} alt = ""></img></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;