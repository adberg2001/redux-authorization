import React from 'react'
import Nav from '../../components/Nav'

function HomePage() {
  const handleLogOut = (e) =>{
    e.preventDefault();
    window.localStorage.removeItem('token')
  }
  const [text, setText] = React.useState("");
  React.useEffect( () => {
    fetch('http://localhost:5432/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth' : `${window.localStorage.getItem('token')}`
      }
    })
      .then(response => {
        if (!response.ok) throw new Error('Вы не авторизованы')
        return response.json()
      })
      .then(json => setText(`${json.text}`))
      .catch((err) => {
        setText(`${err}`)
      })
  } )
  return (
    <div>
      <Nav />
      <p>{text}</p>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  )
}

export default HomePage
