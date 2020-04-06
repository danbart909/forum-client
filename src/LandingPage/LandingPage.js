import React, { Component } from 'react'

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <header role="banner">
            <h1>Thinkful Forum Landing Page</h1>
        </header>
        <section id='s-landing'>
          <div id='div-landing-info'>
            <p>Welcome to the Thinkful Forum, envisioned an alternate means of communication between students in my cohort.</p>
            <p>Use the '<span id='forum'>Forum</span>' link in the navbar to access the main forum from anywhere. '<span id='homepage'>Homepage</span>' will link back to this page.</p>
            <p>The usernames <span id='batman'>Batman</span>, <span id='superman'>Superman</span>, and <span id='lexluthor'>Lex Luthor</span> and all open to guests. The password to these users is simply '<span id='password'>password</span>'.</p>
            <p>The current design was made with mobile in mind and as a result it is, for now, better viewed with a smaller screen.</p>
            <p>You may register with your own username and password and post at your leisure. Note that after registering, instead of being automatically logged in, you will be taken to the login page where you can then login with your newly created username and password.</p>
          </div>
          <div id='div-landing-details'>
            <p><a href='https://github.com/danbart909/forum-client'>Client Repository at Github</a></p>
            <p><a href='https://github.com/danbart909/forum-server'>Server Repository at Github</a></p>
          </div>
        </section>
      </>
    )
  }
}
