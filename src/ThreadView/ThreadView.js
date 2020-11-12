import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReplyCard from '../ReplyCard/ReplyCard'
import ForumService from '../services/forum-service'
import TokenService from '../services/token-service'

export default class ThreadView extends Component {

  handleGoBack = () => {
    this.props.history.push(`/forum`)
  }

  deleteThread = () => {
    let id = this.props.match.params.threadid
    const replies = this.props.forumState.replies.find(x =>
      x.threadid == id
    )
    if (!replies) {
      ForumService.deleteThread(id)
      this.props.deleteThread(id)
      this.props.history.push(`/forum`)
    } else {
      alert(`Can't delete a thread that has messages.`)
    }
  }

  renderReplyButtons = (author, id) => {
    if (TokenService.hasAuthToken()) {
      const decodedToken = TokenService.readJwtToken()
      const username = decodedToken.sub
      if (author == username) {
        return (
          <div id='div-thread-buttons'>
            <Link to={`/forum/${id}/edit`}><button id='button-edit-reply'>edit</button><br/></Link>
            <button  id='button-delete-reply' onClick={() => {this.deleteThread()}}>del</button>
          </div>
        )
      }
    } else {
      return (
        <></>
      )
    }
  }

  renderOP = () => {
    const threadId = this.props.match.params.threadid
    const threads = this.props.forumState.threads
    const thread = threads.find(x =>
      x.id == threadId
    )
    if (thread) {
      return (
        <section className='s-thread'>
          <div id='div-thread'>
            <div id='div-thread-top'>
              <div id='div-thread-name'>
                {thread.name}
              </div>
            </div>
              <div id='div-thread-bot'>
                <div id='div-thread-author'>
                  {thread.author}
                </div>
              <div id='div-thread-op'>
                {thread.op}
                {this.renderOPButtons(thread)}
              </div>
            </div>
          </div>
        </section>
      )
    }
    else {
      return <p>Loading...</p>
    }
  }

  renderOPButtons = (thread) => {
    const threadId = this.props.match.params.threadid
    if (TokenService.hasAuthToken()) {
      const decodedToken = TokenService.readJwtToken()
      const username = decodedToken.sub
      if (thread.author == username) {
        return (
          <div id='div-edit-op-buttons'>
            <Link to={`${threadId}/edit`} style={{ textDecoration: 'none' }}><a className='button-edit-thread'>edit</a></Link>
            <a className='button-delete-thread' onClick={() => {this.deleteThread()}}>del</a>
          </div>
        )
      } else {
        return (
          <></>
        )
      }
    }
  }

  renderReplies = () => {
    const { history } = this.props
    const threadId = this.props.match.params.threadid
    const replies = this.props.forumState.replies
    const theseReplies = replies.filter(reply =>
      reply.threadid == threadId
    )
    if (theseReplies) {
      return (
        <section className='s-replies'>
            {theseReplies.map(reply =>
              <div className='div-reply-card' key={reply.id}>
                <ReplyCard
                  id={reply.id}
                  threadId={reply.threadid}
                  author={reply.author}
                  content={reply.content}
                  history={history}
                  threads={this.props.forumState.threads}
                  deleteReply={this.props.deleteReply}
                />
              </div>
            )}
        </section>
      )
    }
    else {
      return <p>Loading...</p>
    }
  }

  renderPostReplyButtons = () => {
    const threadId = this.props.match.params.threadid
    if (TokenService.hasAuthToken()) {
      return (
        <div className='div-post-reply-buttons'>
          <Link to={`${threadId}/reply`}><button className='button-post-reply-button'>Post Reply</button></Link>
          <Link to={`/forum`}><button className='button-go-back-button'>Go Back</button></Link>
        </div>
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
          <h1>Thinkful Thread Overview</h1>
        </header>
        {this.renderOP()}
        {this.renderReplies()}
        {this.renderPostReplyButtons()}
      </>
    )
  }
}