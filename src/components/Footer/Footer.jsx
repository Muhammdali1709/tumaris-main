import React from 'react'
import "./footer.scss"
import Navbar from '../Navbar/Navbar'
import { NavLink } from "react-router-dom"
import callLogo from "../../assets/images/call.svg"
import facebook from "../../assets/images/facebook.svg"
import instagram from "../../assets/images/instagram.svg"
import telegram from "../../assets/images/telegram.svg"
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
            <div className="footer__inner">
              <NavLink to='/' className='header__logo'>Pressa</NavLink>
            <Navbar />
            <div className="footer__contact">
              <a href='tel:903971860' className="footer__call">
                <img src={callLogo } alt="phone" />
                <span className='footer__contact__text'>+71 200-11-02</span>
              </a>
              <div className="footer__socials">
                <a href="#">
                <img src={facebook} alt="facebook" />
               </a>
                <a href="#">
                <img src={instagram} alt="instagram" />
                </a>
                <a href="#">
                <img src={telegram} alt="telegram" />
                </a>
              </div>
            </div>
            </div>
          </div>
      </footer>
    </>
  )
}

export default Footer
