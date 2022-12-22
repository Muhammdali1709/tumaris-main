import React from 'react'
import "./login.scss"
import user from "../../assets/images/account.svg"
import lock from "../../assets/images/lock.svg"
function Login() {
  return (
    <div className="login">
       <div className="container">
        <h2 className='login__logo'>Pressa</h2>
        <form className='login__form'>
          <h3 className='login__title'>Tizimga kirish</h3>
          <label htmlFor="login" className='login__input'>
            <img src={user} alt="user" />
            <input type="text" id="login" /> 
          </label>
          <label htmlFor="password" className='login__input'>
            <img src={lock} alt="lock" />
            <input type="password" id="password" /> 
          </label>
          <button type='submit' className='login__btn'>Kirish</button>
        </form>
      </div>
    </div>
  )
}

export default Login
