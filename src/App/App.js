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
import ForumService from '../services/forum-service'
import config from '../config'

export default class App extends Component {

    state = {
      threads: [],
      replies: []
    }

  setInitialStateThreads = (threads) => {
    console.log(threads)
    this.setState({ threads })
    console.log(this.state.threads)
  }

  setInitialStateReplies = (replies) => {
    this.setState({ replies })
    console.log(this.state.replies)
  }

  componentDidMount() {
    this.getThreads()
    this.getReplies()
    console.log(this.state)
  }

  getThreads = () => {
    return fetch(`${config.API_ENDPOINT}/threads`, {
      headers: {
        'authorization': `bearer ${config.TOKEN_KEY}`,
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
    .then(res =>
      this.setInitialStateThreads(res)
    )
  }

  getReplies = () => {
    return fetch(`${config.API_ENDPOINT}/replies`, {
      headers: {
        'authorization': `bearer ${config.TOKEN_KEY}`,
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
    .then(res =>
      this.setInitialStateReplies(res)
    )
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
              render={(props) => <ForumView {...props} forumState={this.state} />}
            />
            <Route
              exact path={'/forum/post'}
              render={(props) => <PostThread {...props} forumState={this.state} />}
            />
            <Route
              path={'/forum/:id/reply'}
              render={(props) => <PostReply {...props} forumState={this.state} />}
            />
            <Route
              path={'/forum/:id'}
              render={(props) => <ThreadView {...props} forumState={this.state} />}
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