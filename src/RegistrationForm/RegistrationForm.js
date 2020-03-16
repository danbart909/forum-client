import React, { Component } from 'react'
// import './RegistrationForm.css'

export default class RegistrationForm extends Component {
  render() {
    return (
      <>
        <header role="banner">
          <h1>Thinkful Forum Registration Form</h1>
        </header>
        <section>
      <div>[registration page]</div>
      <hr/>
      <div>
        <form>
          <div>
            <label htmlFor="register-username">Username:</label>
            <input type="text" name="register-username" required/>
          </div>
          <div>
            <label htmlFor="register-fullname">Full Name:</label>
            <input type="text" name="register-fullname" required/>
          </div>
          <div>
            <label htmlFor="register-password">Password:</label>
            <input type="text" name="register-password" required/>
          </div>
          <div>
            <label htmlFor="register-match-password">Match Password:</label>
            <input type="text" name="register-match-password" required/>
          </div>
          <div>
            <button>Register</button>
            <button>Go Back</button>
          </div>
        </form>
      </div>
    </section>
      </>
    )
  }
}