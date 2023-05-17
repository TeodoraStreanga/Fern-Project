import React from "react"
import "../Styles/styles.js"

function ContactPage() {
  return (
    <div className="contact-page">
    
      <div className = "header"></div>
      
      <div className = "contact-panel">
        
        <iframe className = "map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.6527212608594!2d24.030921715709635!3d49.84898247939689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add0dec455d87%3A0xae6f57dfdb101920!2sVysokyi%20Zamok%20St%2C%201%2C%20L&#39;viv%2C%20L&#39;vivs&#39;ka%20oblast%2C%2079000!5e0!3m2!1sen!2sua!4v1640012211103!5m2!1sen!2sua"></iframe>
        
        <div className = "contact-block">

          <span className = "contact-block-header">Контакти</span>

          <ul className ="contact-text">
            <li className = "contact-item">
              <span className = "contact-item-header"><div className = "contact-icon location"></div>Адреса</span>
              <span> вул. Високий Замок, 1, 79008, Львів, Україна</span>
            </li>
            <li className = "contact-item">
              <span className = "contact-item-header"><div className = "contact-icon time"></div>Графік роботи</span>
              <span>Понеділок - П'ятниця, 8:00 AM - 22:00 PM</span>
              <span>Субота - Неділя, 8:00 AM - 22:00 PM</span>
            </li>
            <li className = "contact-item">
              <span className = "contact-item-header"><div className = "contact-icon phone"></div>Телефон</span>
              <span>+ 380(66) 302 21 67</span>
            </li>
            <li className = "contact-item">
              <span className = "contact-item-header"><div className = "contact-icon mail"></div>Пошта</span>
              <span>info@ferncafe.com</span>
            </li>
          </ul>

        </div>
      </div>

    </div>
  );
}

export default ContactPage;