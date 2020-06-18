// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { connect } from 'react-redux'
import Nav from '../../components/Nav'
import style from './sign-in.module.css'
import { firstName, lastName, nickName, password } from '../../store/action'

// eslint-disable-next-line no-unused-vars
function SignIn({
  setFirstName,
  setLastName,
  setNickName,
  setPassword,
  stateName,
  stateLastName,
  stateNick,
  statePassword
}) {
  console.log( `${stateName}`, stateLastName, stateNick, statePassword)

  const handleSignIn = (e) => {
    e.preventDefault()
    const body = {
      stateName,
      stateLastName,
      stateNick,
      statePassword
    }
    fetch('http://localhost:5432/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(() => {

      })
  }

  return (
    <div>
      <Nav/>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <div className={style.mainCont}>
        <label>
          <input type="text" placeholder="first name" value={stateName}
                 onChange={e => setFirstName(e.target.value)}/>
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          <input type="text" placeholder="last name" value={stateLastName}
                 onChange={e => setLastName(e.target.value)}/>
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          <input type="text" placeholder="user name" value={stateNick}
                 onChange={e => setNickName(e.target.value)}/>
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          <input type="password" placeholder="password" value={statePassword}
                 onChange={e => setPassword(e.target.value)}/>
        </label>
        {/* eslint-disable-next-line react/button-has-type */}
        <button className={style.btn} onClick={handleSignIn}>Sign Up</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  stateName: state.firstName,
  stateLastName: state.lastName,
  stateNick: state.nickName,
  statePassword: state.password,
})
// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({
  setFirstName: (name) => dispatch(firstName(name)),
  setLastName: (surname) => dispatch(lastName(surname)),
  setNickName: (nick) => dispatch(nickName(nick)),
  setPassword: (pass) => dispatch(password(pass))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
