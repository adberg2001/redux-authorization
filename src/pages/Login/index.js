// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { connect } from 'react-redux'
import Nav from '../../components/Nav'
import style from '../SignIn/sign-in.module.css'

// eslint-disable-next-line no-unused-vars
function Login() {

  const [username, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [err, setErr] = React.useState('')

  const handleClick = (e) => {
    e.preventDefault()
    console.log(username, password)
    fetch('http://localhost:5432/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => {
        if (!response.ok) throw response.status
        return response.json()
      })
      .then(json => {
        console.log(json.user.token)
        window.localStorage.setItem('token', json.user.token)
        // eslint-disable-next-line no-restricted-globals
        window.location.assign("http://localhost:3000/")
      })
      .catch((err) => {
        console.log(err)
        setErr(`incorrect nickname or password`)
      })
  }

  return (
    <div>
      <Nav/>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <div className={style.mainCont}>
        <label>
          <input value={username} onChange={e => setUserName(e.target.value)} type="text"
                 placeholder="user name"/>
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password"
                 placeholder="password"/>
        </label>
        {/* eslint-disable-next-line react/button-has-type */}
        <button className={style.btn} onClick={handleClick}>Sign Up</button>
        <p>{err}</p>
      </div>
    </div>
  )
}

export default Login
