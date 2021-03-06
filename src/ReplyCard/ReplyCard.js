import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ForumService from '../services/forum-service'
import TokenService from '../services/token-service'


export default class ReplyCard extends Component {

  handleDelete = () => {
    ForumService.deleteReply(this.props.id)
    const thread = this.props.threads.find(x =>
      x.id === this.props.threadId
    )
    this.props.deleteReply(this.props.id)
    this.props.history.push(`/forum/${thread.id}`)
  }

  renderButtons = () => {
    if (TokenService.getAuthToken()) {
      const decodedToken = TokenService.readJwtToken()
      const username = decodedToken.sub
      if (username == this.props.author) {
        return (
          <div className='div-reply-edit-delete-buttons'>
            <Link to={`/forum/${this.props.threadId}/${this.props.id}/edit`} style={{ textDecoration: 'none' }}><a className='button-edit-button'>edit</a></Link>
            <a className='button-delete-button' onClick={() => {this.handleDelete()}}>del</a>
          </div>
        )
      } else {
        return (
          <></>
        )
      }
    } else {
      return (
        <></>
      )
    }
  }

  render() {
    return (
      <>
        <div className='div-reply-card-left'>
          <div className='div-reply-card-author'>
            {this.props.author}
          </div>
        </div>
        <div className='div-reply-card-right'>
          <div className='div-reply-card-content'>
            {this.props.content}
            {this.renderButtons()}
          </div>
        </div>
      </>
    )
  }
}