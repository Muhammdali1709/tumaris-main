import React from 'react'
import {NavLink} from "react-router-dom"
import "./navbar.scss"
function Navbar() {
  return (
    <>
      <nav className="nav">
        <ul className='nav__list'>
          <li className="nav__item">
            <NavLink to={'/about'}   className={({ isActive }) =>
              isActive ? "nav__link-active" : "nav__link"
            }>Biz haqimizda</NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link">Savol va javoblar</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
