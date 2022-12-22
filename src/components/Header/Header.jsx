import React from 'react'
import './header.scss'
import { NavLink,useNavigate } from 'react-router-dom'
import searchLogo from "../../assets/images/search.svg"
import plusLogo from "../../assets/images/plus.svg"
import Navbar from '../Navbar/Navbar'
function Header() {
  const navigate=useNavigate()
  return (
    <>
      <header className='header'>
        <div className="container">
          <div className="header__inner">
            <NavLink to='/' className='header__logo'>Pressa</NavLink>
            <form className='header__form'>
              <label htmlFor="header__search" className='header__search'>
                <img src={searchLogo} alt="search bar logo" className='search-logo' />
                <input id='header__search' type="text" className='header__input' placeholder='Izlash'/>
              </label>
            </form>
            <Navbar />
            <button className='header__button' onClick={()=>navigate("/poster")}>
              <img src={ plusLogo} alt="plus logo" className='header__button__logo' />
              E'lon berish
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
