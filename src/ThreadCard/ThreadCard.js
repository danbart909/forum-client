import React, { Component } from 'react'
// import './ThreadCard.css'
import { Link } from 'react-router-dom'

export default class ThreadCard extends Component {
  render() {
    return (
      <div className='div-thread-card'>
        <div className='div-forum-thread-id-author'>#{this.props.threads.id} - {this.props.threads.author}</div>
        <div className='div-forum-thread-name'><Link to={`/forum/${this.props.threads.id}`}>{this.props.threads.name}</Link></div>
      </div>
    )
  }
}