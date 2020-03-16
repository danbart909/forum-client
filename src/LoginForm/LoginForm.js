import React, { Component } from 'react'
// import './LoginForm.css'

export default class LoginForm extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Thinkful Forum Login Form</h1>
        </header>
        <section>
          <div>
            [login page]
          </div>
          <hr/>
          <div>
            <form>
              <div>
                <label htmlFor="login-username">Username:</label>
                <input type="text" name="login-username" required/>
              </div>
              <div>
                <label htmlFor="login-password">Password:</label>
                <input type="text" name="login-password" required/>
              </div>
              <div>
                <button>Login</button>
                <button>Go Back</button>
              </div>
            </form>
          </div>
        </section>
      </>
    )
  }
}
