// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { connect } from 'react-redux'
import Nav from '../../components/Nav'
import style from './sign-in.module.css'
import { firstName, lastName, nickName, password, error } from '../../store/action'

// eslint-disable-next-line no-unused-vars
function SignIn({
  // eslint-disable-next-line react/prop-types
  setFirstName, setLastName, setNickName, setPassword, setError,
  // eslint-disable-next-line react/prop-types,no-unused-vars
  stateName, stateLastName, stateNick, statePassword, stateError,
}) {

  const handleSignIn = (e) => {
    e.preventDefault()
    const body = {
      firstname: stateName,
      lastname: stateLastName,
      username: stateNick,
      password: statePassword,
    }
    fetch('http://localhost:5432/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) throw response.status
        return response.json()
      })
      .then((json) => {
        window.localStorage.setItem('token', json.user.token)
        window.location.assign('http://localhost:3000/login')
      })
      .catch((err) => {
        // eslint-disable-next-line no-unused-expressions
        err === 400 ? setError('Пользователь с таким именем уже зарегистрирован')
          : setError('Неизвестная ошибка')
      })
  }

  return (
    <div>
      <Nav />
      <div className={style.mainCont}>
        <input
          type="text"
          placeholder="first name"
          value={stateName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="last name"
          value={stateLastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="user name"
          value={stateNick}
          onChange={(e) => setNickName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={statePassword}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* eslint-disable-next-line react/button-has-type */}
        <button className={style.btn} onClick={handleSignIn}>Sign Up</button>
        <p>{stateError}</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  stateName: state.firstName,
  stateLastName: state.lastName,
  stateNick: state.nickName,
  statePassword: state.password,
  stateError: state.error,
})
// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({
  setFirstName: (name) => dispatch(firstName(name)),
  setLastName: (surname) => dispatch(lastName(surname)),
  setNickName: (nick) => dispatch(nickName(nick)),
  setPassword: (pass) => dispatch(password(pass)),
  setError: (err) => dispatch(error(err)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
