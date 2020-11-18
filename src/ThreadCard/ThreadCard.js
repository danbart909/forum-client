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
        <div className='div-forum-thread-left'>
          <div className='div-forum-thread-name'>
            <Link className='div-forum-thread-name-link' to={`/forum/${this.props.threads.id}`}>
              <span>{this.props.threads.name}</span>
            </Link>
          </div>
          <div className='div-forum-thread-author'>
            <span>Author: {this.props.threads.author}</span>
          </div>
        </div>
        <div className='div-forum-thread-right'>
          <div className='div-forum-thread-reply-count'>
            <span>Replies:</span>
            <span>{newRepliesArray.length}</span>
          </div>
          <div className='div-forum-thread-lastreply'>
            <span>Last Reply By:</span>
            <span>QQQQQQ</span>
          </div>
        </div>
      </div>
    )
  }
}