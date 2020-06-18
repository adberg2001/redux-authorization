import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import HomePage from './pages/Home'
import NotFoundPage from './pages/NotFound'
import Login from './pages/Login'
import SignIn from './pages/SignIn'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signIn" component={SignIn} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
