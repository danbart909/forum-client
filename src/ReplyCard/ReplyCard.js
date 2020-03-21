import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './ReplyCard.css'
import ForumService from '../services/forum-service'

export default class ReplyCard extends Component {

  handleDelete = () => {
    ForumService.deleteReply(this.props.id)
    this.props.history.push(`/forum`)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.id}/
        {this.props.author}/
        {this.props.content}
        <Link to={`/forum/${this.props.threadId}/${this.props.id}/edit`}><button>edit</button></Link>
        <button onClick={() => {this.handleDelete()}}>delete</button>
      </div>
    )
  }
}