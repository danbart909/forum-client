import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service'
export default class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      realname: '',
      password: '',
      matchpassword: '',
      error: ''
    }
  }

  handleChangeUsername = e => {
    this.setState({ username: e.target.value })
  }

  handleChangeRealname = e => {
    this.setState({ realname: e.target.value })
  }

  handleChangePassword = e => {
    this.setState({ password: e.target.value })
  }

  handleChangeMatchpassword = e => {
    this.setState({ matchpassword: e.target.value })
  }

  handleGoBack = () => {
    this.props.history.push(`/forum`)
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, realname, password } = this.state
    // const date_joined = new Date()
    const user = { username, realname, password }

    AuthApiService.postUser( user )
      .then(req => {
        this.setState({
          username: '',
          realname: '',
          password: '',
          matchpassword: ''
        })
      })
      .catch(res => {
        this.setState({ error: res.error })
        console.log(res.error)
      })

    this.props.history.push('/login')
  }

  showErrors = () => {
    if (this.state.error) {
      return this.state.error
    } else {
      return <></>
    }
  }

  error1 = () => {
    if (!this.state.username || !this.state.realname || !this.state.password || !this.state.matchpassword) {
      return (
        <div>All fields are required.</div>
      )
    } else {
      return (
        <></>
      )
    }
  }

  error2 = () => {
    if ((this.state.password != this.state.matchpassword) || !this.state.password || !this.state.matchpassword) {
      return (
        <div>'Password' must equal 'Match Password'</div>
      )
    } else {
      return (
        <></>
      )
    }
  }

  render() {
    return (
      <>
        <header role="banner">
          <h1>Thinkful Forum Registration Form</h1>
        </header>
        <section id='s-registration-form'>
          <form id='form-registration-form' onSubmit={(e) => {this.handleSubmit(e)}}>
            <div id='div-registration-username'>
              <label htmlFor="register-username">Username:</label>
              <input type="text" value={this.state.username} onChange={this.handleChangeUsername} name="register-username" required/>
            </div>
            <div id='div-registration-realname'>
              <label htmlFor="register-realname">Real Name:</label>
              <input type="text" value={this.state.realname} onChange={this.handleChangeRealname} name="register-realname" required/>
            </div>
            <div id='div-registration-password'>
              <label htmlFor="register-password">Password:</label>
              <input type="password" value={this.state.password} onChange={this.handleChangePassword} name="register-password" required/>
            </div>
            <div id='div-registration-match-password'>
              <label htmlFor="register-match-password">Match Password:</label>
              <input type="password" value={this.state.matchpassword} onChange={this.handleChangeMatchpassword} name="register-match-password" required/>
            </div>
            <div id='div-registration-buttons'>
              <button id='reg-reg' type='submit' disabled={!this.state.username || !this.state.realname || !this.state.password || !this.state.matchpassword || (this.state.password !== this.state.matchpassword)}>Register</button>
              <button id='reg-goback' onClick={() => {this.handleGoBack()}}>Go Back</button>
            </div>
            <div id='div-registration-errors'>
              <div id='div-registration-errors-alert'>{this.showErrors()}</div>
              <div id='div-registration-errors-instructions-1'>
                {this.error1()}
              </div>
              <div id='div-registration-errors-instructions-2'>
                {this.error2()}
              </div>
            </div>
          </form>
        </section>
      </>
    )
  }
}