import React, { Component } from 'react'
// import './ForumView.css'
import { Link } from 'react-router-dom'
import ThreadCard from '../ThreadCard/ThreadCard'
import TokenService from '../services/token-service'

export default class ForumView extends Component {

  renderThreads = () => {
    const threads = this.props.forumState.threads
    if (threads) {
      return threads.map(threads =>
        <ThreadCard
          key={threads.id}
          threads={threads}
        />
      )
    } else {
      return <p>Loading...</p>
    }
  }

  renderNewThreadButton = () => {
    if (TokenService.hasAuthToken()) {
      return (
        <div id='div-new-thread-button'><Link to='/forum/post'><button>New Thread</button></Link></div>
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
          <h1>Thinkful Forum Overview</h1>
        </header>
        <section id='s-forum-view'>
          {this.renderNewThreadButton()}
          {this.renderThreads()}
        </section>
      </>
    )
  }
}