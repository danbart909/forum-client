import React, { Component } from 'react'
// import './PostReply.css'
import ForumService from '../services/forum-service'
import TokenService from '../services/token-service'

export default class PostReply extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      content: ''
    }
  }

  threadName = () => {
    const threadid = this.props.match.params.threadid
    const threads = this.props.forumState.threads
    const thread = threads.find(x =>
      x.id == threadid
    )
    if (thread) {
      return (
        thread.name
      )
    }
    else {
      return <p>Loading...</p>
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const content = this.state.content
    const threadId = this.props.match.params.threadid
    const decodedToken = TokenService.readJwtToken()
    const author = decodedToken.sub
    console.log(content, author, threadId)
    ForumService.postReply(threadId, author, content)
      .then(reply => {
        console.log(reply)
        this.props.addReply(reply)
        this.props.history.push(`/forum/${threadId}`)
      })
  }

  handleGoBack = () => {
    const threadId = this.props.match.params.id
    this.props.history.push(`/forum/${threadId}`)
  }

  handleChangeContent = e => {
    this.setState({ content: e.target.value })
  }

  render() {
    return (
      <>
        <header role="banner">
          <h1>Thinkful Forum New Reply Form</h1>
        </header>
        <section id='s-post-reply-form'>
          <div id='div-post-reply-form-container'>
            <form id='form-post-reply-form' onSubmit={(e) => {this.handleSubmit(e)}}>
              <div id='div-post-reply-thread-name'>
                {this.threadName()}
              </div>
              <div id='div-post-reply-body'>
                {/* <label htmlFor="thread-body">Reply:</label> */}
                <textarea rows="10" name="reply-body" onChange={this.handleChangeContent} required></textarea>
              </div>
              <div id='div-post-reply-buttons'>
                <button id='button-post-reply' type='submit' disabled={!this.state.content}>Post Reply</button>
                <button id='button-go-back' onClick={() => {this.handleGoBack()}}>Go Back</button>
              </div>
            </form>
          </div>
        </section>
      </>
    )
  }
}
