import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service'
export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      username: '',
      password: ''
    }
  }

  handleChangeUsername = e => {
    this.setState({ username: e.target.value })
  }

  handleChangePassword = e => {
    this.setState({ password: e.target.value })
  }

  handleGoBack = () => {
    this.props.history.push(`/forum`)
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state

    AuthApiService.postLogin({ username, password })
      .then(res => {
        this.setState({
          username: '',
          password: ''
        })
        this.props.history.push(`/forum`)
        window.location.reload(false)
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  displayError = () => {
    if (this.state.error) {
      return (
        this.state.error
      )
    }
  }

  render() {
    return (
      <>
        <header>
          <h1>Thinkful Forum Login Form</h1>
        </header>
        <section id='s-login-form'>
          <div id='div-login-form-container'>
            <form id='form-login-form' onSubmit={(e) => {this.handleSubmit(e)}}>
              <div id='div-login-username'>
                <label htmlFor="input-login-username">Username:</label>
                <input type="text" value={this.state.username} onChange={this.handleChangeUsername} id="input-login-username" required/>
              </div>
              <div id='div-login-password'>
                <label htmlFor="input-login-password">Password:</label>
                <input type="password" value={this.state.password} onChange={this.handleChangePassword} id="input-login-password" required/>
              </div>
              <div id='div-login-error'>
                {this.displayError()}
              </div>
              <div id='div-login-buttons'>
                <button id='button-login-login-button' type='submit' disabled={!this.state.username || !this.state.password}>Login</button>
                <button id='button-login-go-back-button' onClick={() => {this.handleGoBack()}}>Go Back</button>
              </div>
            </form>
          </div>
        </section>
      </>
    )
  }
}
