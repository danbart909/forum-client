import React, { Component } from 'react'
// import './PostReply.css'
import ForumService from '../services/forum-service'
export default class PostReply extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      content: ''
    }
  }

  threadName = () => {
    const threadId = this.props.match.params.id
    const threads = this.props.forumState.threads
    const thread = threads.find(x =>
      x.id == threadId
    )
    if (thread) {
      return (
        thread.name
      )
    }
    else {
      return <p>Loading... Please Wait</p>
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const content = this.state.content
    const threadId = this.props.match.params.id
    ForumService.postReply(threadId, content)
    this.props.history.push(`/forum/${threadId}`)
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
        <section>
          <div id="one">[Post New Reply]</div>
          <hr/>
          <div>
            <form className='post-reply-form' onSubmit={(e) => {this.handleSubmit(e)}}>
              <div>
                {this.threadName()}
              </div>
              <div>
                {/* <label htmlFor="thread-body">Reply:</label> */}
                <textarea rows="10" name="reply-body" onChange={this.handleChangeContent} required></textarea>
              </div>
              <div>
                <button type='submit'>Post Reply</button>
                <button onClick={() => {this.handleGoBack()}}>Go Back</button>
              </div>
            </form>
          </div>
        </section>
      </>
    )
  }
}
