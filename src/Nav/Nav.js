import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Navbar(Home)</Link> - <Link to='/forum'>Forum</Link> - <Link to='/login'>Login</Link>/<Link to='/register'>Register</Link>
      </div>
    )
  }
}