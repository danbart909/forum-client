import React, { Component } from 'react'
// import './ThreadView.css'
import { Link } from 'react-router-dom'
import ReplyCard from '../ReplyCard/ReplyCard'
import ForumService from '../services/forum-service'
import TokenService from '../services/token-service'

export default class ThreadView extends Component {

  deleteThread = () => {
    let id = this.props.match.params.threadid
    const replies = this.props.forumState.replies.find(x =>
      x.threadid == id
    )
    console.log(replies)
    if (!replies) {
      ForumService.deleteThread(id)
      this.props.deleteThread(id)
      this.props.history.push(`/forum`)
    } else {
      alert(`Can't delete a thread that has messages.`)
    }
  }

  renderButtons = (author, id) => {
    if (TokenService.hasAuthToken()) {
      const decodedToken = TokenService.readJwtToken()
      const username = decodedToken.sub
      if (author == username) {
        return (
          <div id='div-thread-buttons'>
            <Link to={`/forum/${id}/edit`}><button>edit</button></Link>
            <button onClick={() => {this.deleteThread()}}>delete</button>
          </div>
        )
      }
    } else {
      return (
        <></>
      )
    }
  }

  renderNewThreadButton = () => {
    const threadId = this.props.match.params.threadid
    if (TokenService.hasAuthToken()) {
      return (
        <div id='div-new-thread-button'>
          <Link to={`${threadId}/reply`}><button>Post Reply</button></Link>
        </div>
      )
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
            <div id='div-thread-id-author-name'>#{thread.id} - {thread.author} - {thread.name}</div>
            <div id='div-thread-op'>{thread.op}</div>
          </div>
          {this.renderButtons(thread.author, thread.id)}
        </section>
      )
    }
    else {
      return <p>Loading...</p>
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

  render() {
    return (
      <>
        <header role="banner">
          <h1>Thinkful Thread Overview</h1>
        </header>
        {this.renderOP()}
        {this.renderReplies()}
        {this.renderNewThreadButton()}
      </>
    )
  }
}