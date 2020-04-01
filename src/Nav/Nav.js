import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './Nav.css'
import TokenService from '../services/token-service'
import IdleService from '../services/idle-service'
export default class Nav extends Component {
  logout = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    window.location.reload(false)
  }

  renderUserName = () => {
    const decodedToken = TokenService.readJwtToken()
    const username = decodedToken.sub
    return username
  }

  log = () => {
    console.log(TokenService.hasAuthToken())
    console.log(TokenService.getAuthToken())
    console.log(TokenService.readJwtToken())
    const decodedToken = TokenService.readJwtToken()
    const username = decodedToken.sub
    console.log(username)
  }

  renderLogin = () => {
    return (
      <div id='div-login'>
        <Link to='/'>Navbar(Home)</Link> - <Link to='/forum'>Forum</Link> - <Link to='/login'>Login</Link>/<Link to='/register'>Register</Link>
      </div>
    )
  }

  renderLogout = () => {
    return (
      <div id='div-logout'>
        <Link to='/'>Navbar(Home)</Link> - <Link to='/forum'>Forum</Link> - Hello {this.renderUserName()}! - <button onClick={() => {this.log()}}>log</button> - <button onClick={() => {this.logout()}}>Logout</button>
      </div>
    )
  }

  render() {
    return (
      <>
        {TokenService.hasAuthToken()
          ? this.renderLogout()
          : this.renderLogin()}
      </>
    )
  }
}