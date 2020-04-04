import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ThreadCard extends Component {
  render() {
    return (
      <div className='div-thread-card'>
        <div className='div-forum-thread-author'>
          {this.props.threads.author}
        </div>
        <div className='div-forum-thread-id-name'>
          #{this.props.threads.id} - <Link to={`/forum/${this.props.threads.id}`}>{this.props.threads.name}</Link>
        </div>
      </div>
    )
  }
}