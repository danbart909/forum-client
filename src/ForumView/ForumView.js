import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ThreadCard from '../ThreadCard/ThreadCard'
import TokenService from '../services/token-service'

export default class ForumView extends Component {

  renderThreads = () => {
    const threads = this.props.forumState.threads
    const replies = this.props.forumState.replies
    if (threads) {
      return threads.map(threads =>
        <ThreadCard
          key={threads.id}
          threads={threads}
          replies={replies}
        />
      )
    } else {
      return <p>Loading...</p>
    }
  }

  renderGuideBar = () => {
    return (
      <div id='div-thread-header'>
        <div id='div-forum-thread-author-header'>
          Author
        </div>
        <div id='div-forum-thread-id-header'>
          Thread Title
        </div>
        <div id='div-forum-thread-reply-count-header'>
          Replies
        </div>
      </div>
    )
  }

  renderNewThreadButton = () => {
    if (TokenService.hasAuthToken()) {
      return (
        <div id='div-new-thread-button'><Link to='/forum/post'><button id='button-new-thread-button'>New Thread</button></Link></div>
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
          {this.renderGuideBar()}
          {this.renderThreads()}
        </section>
      </>
    )
  }
}