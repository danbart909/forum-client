import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './ReplyCard.css'
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
          <div id='div-reply-edit-delete-buttons'>
            <Link to={`/forum/${this.props.threadId}/${this.props.id}/edit`}><button className='button-edit-button'>edit</button></Link>
            <button className='button-delete-button' onClick={() => {this.handleDelete()}}>delete</button>
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
        <div id='div-reply-card-author'>{this.props.author}</div>
        <div id='div-reply-card-content'>{this.props.content}</div>
        {this.renderButtons()}
      </>
    )
  }
}



// renderButtons = () => {
//   <div id='div-reply-edit-delete-buttons'>
//     <Link to={`/forum/${this.props.threadId}/${this.props.id}/edit`}><button disabled={!TokenService.hasAuthToken() || (!(username == this.props.author))} className='button-edit-button'>edit</button></Link>
//     <button disabled={!TokenService.hasAuthToken() || (!(username == this.props.author))} className='button-delete-button' onClick={() => {this.handleDelete()}}>delete</button>
//   </div>
// }