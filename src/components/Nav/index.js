// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { NavLink } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import style from './nav.module.css'

// eslint-disable-next-line no-unused-vars
function Nav() {
  return (
    <div className={style.mainCont}>
      <NavLink to="/login" exact>Login</NavLink>
      <NavLink to="/signIn" exact>Sign in</NavLink>
    </div>
  )
}

export default Nav
