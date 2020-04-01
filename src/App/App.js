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
import EditThread from '../EditThread/EditThread'
import EditReply from '../EditReply/EditReply'
import TokenService from '../services/token-service'
import AuthApiService from '../services/auth-api-service'
import IdleService from '../services/idle-service'
import config from '../config'

export default class App extends Component {

    state = {
      threads: [],
      replies: []
    }

  addThread = thread => {
    this.setState({
      threads: [...this.state.threads, thread]
    })
  }

  addReply = reply => {
    this.setState({
      replies: [...this.state.replies, reply]
    })
  }

  deleteThread = thread => {
    const newThreads = this.state.threads.filter(x =>
      x.id != thread
    )
    this.setState({
      threads: newThreads
    })
  }

  deleteReply = reply => {
    const { replies } = this.state
    const newReplies = replies.filter(x =>
      x.id !== reply  
    )
    this.setState({
      replies: newReplies
    })
  }

  editThread = ({id, author, name, op}) => {
    const threads = this.state.threads.slice()
    const oldThread = threads.find(x =>
      x.id == id
    )
    const oneLessThread = threads.filter(x =>
      x.id != id
    )
    const idNum = Number(id)
    const newThread = { id: idNum, author: author, name: name, op: op, date_created: oldThread.date_created }
    const newThreads = [...oneLessThread, newThread]
    this.setState({ threads: newThreads })
  }

  editReply = ({id, content}) => {
    const replies = this.state.replies.slice()
    const oldReply = replies.find(x =>
      x.id == id
    )
    const oneLessReplies = replies.filter(x =>
      x.id != id
    )
    const idNum = Number(id)
    const newReply = { id: idNum, threadid: oldReply.threadid, author: oldReply.author, content: content, date_posted: oldReply.date_posted }
    const newReplies = [...oneLessReplies, newReply]
    this.setState({ replies: newReplies })
  }

  setInitialState = (threads, replies) => {
    this.setState({ threads, replies })
  }

  componentDidMount() {
    Promise.all([
      ForumService.getThreads(), ForumService.getReplies()
    ])
      .then(([threads, replies]) => {this.setInitialState(threads, replies)})
    IdleService.setIdleCallback(this.logoutFromIdle)
    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets()
      // TokenService.queueCallbackBeforeExpiry(() => {
      //   AuthApiService.postRefreshToken()
      // })
    }
  }

  // componentDidMount() {
  //   /*
  //     set the function (callback) to call when a user goes idle
  //     we'll set this to logout a user when they're idle
  //   */
  //   IdleService.setIdleCallback(this.logoutFromIdle)

  //   /* if a user is logged in */
  //   if (TokenService.hasAuthToken()) {
  //     /*
  //       tell the idle service to register event listeners
  //       the event listeners are fired when a user does something, e.g. move their mouse
  //       if the user doesn't trigger one of these event listeners,
  //         the idleCallback (logout) will be invoked
  //     */
  //     IdleService.regiserIdleTimerResets()

  //     /*
  //       Tell the token service to read the JWT, looking at the exp value
  //       and queue a timeout just before the token expires
  //     */
  //     TokenService.queueCallbackBeforeExpiry(() => {
  //       /* the timoue will call this callback just before the token expires */
  //       AuthApiService.postRefreshToken()
  //     })
  //   }
  // }

  // componentWillUnmount() {
  //   /*
  //     when the app unmounts,
  //     stop the event listeners that auto logout (clear the token from storage)
  //   */
  //   IdleService.unRegisterIdleResets()
  //   /*
  //     and remove the refresh endpoint request
  //   */
  //   TokenService.clearCallbackBeforeExpiry()
  // }

  logoutFromIdle = () => {
    /* remove the token from localStorage */
    TokenService.clearAuthToken()
    /* remove any queued calls to the refresh endpoint */
    TokenService.clearCallbackBeforeExpiry()
    /* remove the timeouts that auto logout when idle */
    IdleService.unRegisterIdleResets()
    /*
      react won't know the token has been removed from local storage,
      so we need to tell React to rerender
    */
    this.forceUpdate()
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
              render={(props) => <LoginForm {...props} />}
            />
            <Route
              exact path={'/register'}
              component={RegistrationForm}
            />
            <Route
              path={'/forum/:threadid/edit'}
              render={(props) => <EditThread {...props} editThread={(thread) => this.editThread(thread)} forumState={this.state} />}
            />
            <Route
              path={'/forum/:threadid/:id/edit'}
              render={(props) => <EditReply {...props} editReply={(reply) => this.editReply(reply)} forumState={this.state} />}
            />
            <Route
              exact path={'/forum'}
              render={(props) => <ForumView {...props} deleteReply={(reply) => this.deleteReply(reply)} forumState={this.state} />}
            />
            <Route
              exact path={'/forum/post'}
              render={(props) => <PostThread {...props} addThread={(thread) => this.addThread(thread)} forumState={this.state} />}
            />
            <Route
              path={'/forum/:threadid/reply'}
              render={(props) => <PostReply {...props} addReply={(reply) => this.addReply(reply)} forumState={this.state} />}
            />
            <Route
              path={'/forum/:threadid'}
              render={(props) => <ThreadView {...props} deleteReply={(reply) => this.deleteReply(reply)} deleteThread={(thread) => this.deleteThread(thread)} forumState={this.state} />}
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