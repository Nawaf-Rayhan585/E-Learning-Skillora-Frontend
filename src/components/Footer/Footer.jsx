import React from "react";
import "./Footer.css";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer__container bd-container">
          <div className="footer__logo"><img src={logo} alt="logo" className="logo"/></div>
          <p class="footer__description">
            Educatating Students is our Job, Best E-Learning Platform
          </p>

          <div class="footer__social">
            <a href="#" class="footer__link">
                <i class="bi bi-youtube"></i>
            </a>
            <a href="#" class="footer__link">
                <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="footer__link">
                <i class="bi bi-linkedin"></i>
            </a>
          </div>
          <p class="footer__copy">&#169; 2025 Skillora. All right reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
