import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './ReplyCard.css'
import ForumService from '../services/forum-service'

export default class ReplyCard extends Component {

  handleDelete = () => {
    ForumService.deleteReply(this.props.id)
    const thread = this.props.threads.find(x =>
      x.id === this.props.threadId
    )
    this.props.history.push(`/forum/${thread.id}`)
  }

  render() {
    return (
      <div>
        <p>#{this.props.id} - {this.props.author}</p>
        <p>{this.props.content}</p>
        <Link to={`/forum/${this.props.threadId}/${this.props.id}/edit`}><button>edit</button></Link>
        <button onClick={() => {this.handleDelete()}}>delete</button>
      </div>
    )
  }
}