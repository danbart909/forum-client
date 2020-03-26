import React, { Component } from 'react'
// import './ThreadCard.css'
import { Link } from 'react-router-dom'

export default class ThreadCard extends Component {
  render() {
    return (
      <div className='ThreadCard'>
        <p>#{this.props.threads.id} - {this.props.threads.author} - <Link to={`/forum/${this.props.threads.id}`}>{this.props.threads.name}</Link></p>
      </div>
    )
  }
}