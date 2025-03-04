import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

  const [modal, setModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu toggle

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
   <>

    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          <img src={logo} alt="logo" />
        </Link>
        
        {/* Hamburger Menu Icon */}
        <i 
          className={`bi bi-list hamburger-icon ${isMobileMenuOpen ? "active" : ""}`} 
          onClick={toggleMobileMenu}
        ></i>

        {/* Navbar Menu */}
        <ul className={`nav__menu ${isMobileMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className='last-li'>
            <Link to="/courses">All Courses</Link>
          </li>
          <li>
            <Link to="/contact" className="btn-nav">Get In Touch</Link>
          </li>
          <li>
            <div className="container-pill">
              <i className="bi bi-cart" onClick={toggleModal}></i>
              <div className="pill">0</div>
              <i className="bi bi-search"></i>
            </div>
          </li>
        </ul>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="title-modal">Items In Cart</h2>
            <p>There's currently no items in your cart.</p>
            <i className="bi bi-x-circle-fill close-modal" onClick={toggleModal}></i>
          </div>
        </div>
      )}
    </nav>
   </>
  );
};

export default Navbar;
