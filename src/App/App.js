import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css' 
import Nav from '../Nav/Nav'
import LandingPage from '../LandingPage/LandingPage'
import LoginForm from '../LoginForm/LoginForm'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import ForumView from '../ForumView/ForumView'
import ThreadView from '../ThreadView/ThreadView'
import PostThread from '../PostThread/PostThread'
import PostReply from '../PostReply/PostReply'
import PageNotFound from '../PageNotFound/PageNotFound'
import tempStore from '../tempStore'

export default class App extends Component {

  state = {
    tempStore
  }

  render() {
    return (
      <>
        <nav role="header">
          <Nav/>
        </nav>
        <main>
          <Switch>
            <Route
              exact path={'/'}
              component={LandingPage}
            />
            <Route
              exact path={'/login'}
              component={LoginForm}
            />
            <Route
              exact path={'/register'}
              component={RegistrationForm}
            />
            <Route
              exact path={'/forum'}
              render={(props) => <ForumView {...props} state={this.state} />}
            />
            <Route
              exact path={'/forum/post'}
              render={(props) => <PostThread {...props} state={this.state} />}
            />
            <Route
              path={'/forum/:id/reply'}
              render={(props) => <PostReply {...props} state={this.state} />}
            />
            <Route
              path={'/forum/:id'}
              render={(props) => <ThreadView {...props} state={this.state} />}
            />
            <Route
              component={PageNotFound}
            />
          </Switch>
        </main>
        <div>
          <button onClick={() => {console.log(this.state)}}>this.state(App)</button>
        </div>
      </>
    )
  }
}