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

export default class App extends Component {
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
              component={ForumView}
            />
            <Route
              exact path={'/forum/:threadId'}
              component={ThreadView}
            />
            <Route
              exact path={'/forum/post'}
              component={PostThread}
            />
            <Route
              exact path={'/forum/reply'}
              component={PostReply}
            />
            <Route
              component={PageNotFound}
            />
          </Switch>
        </main>
      </>
    )
  }
}