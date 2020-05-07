import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ThreadCard extends Component {
  render() {
    const { replies, threads } = this.props
    const newRepliesArray = replies.filter(x =>
      x.threadid == threads.id
    )
    return (
      <div className='div-thread-card'>
        <div className='div-forum-thread-first-half'>
          <div className='div-forum-thread-author'>
            {this.props.threads.author}
          </div>
        </div>
        <div className='div-forum-thread-second-half'>
          <div className='div-forum-thread-name'>
            <Link to={`/forum/${this.props.threads.id}`}>{this.props.threads.name}</Link>
          </div>
          <div className='div-forum-thread-reply-count'>
            {newRepliesArray.length}
          </div>
        </div>
      </div>
    )
  }
}