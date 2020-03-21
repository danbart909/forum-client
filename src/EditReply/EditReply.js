import React, { Component } from 'react'
// import './EditReply.css'
import ForumService from '../services/forum-service'

export default class EditReply extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      content: ''
    }
  }

  threadName = () => {
    const threadId = this.props.match.params.threadid
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

  replyContent = () => {
    const id = this.props.match.params.id
    const { replies } = this.props.forumState
    const reply = replies.find(x =>
      x.id == id  
    )
    if (reply) {
      return (
        reply.content
      )
      .then( this.setState({ content: reply.content }) )
    }
    else {
      return <p>Loading... Please Wait</p>
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.props)
    let id = this.props.match.params.id
    let content = this.state.content
    ForumService.editReply(id, content)
    this.props.history.push(`/forum`)
    console.log(id, content)
  }

  handleGoBack = () => {
    this.props.history.push('/forum')
  }

  handleChangeContent = e => {
    this.setState({ content: e.target.value })
    console.log(this.props)
  }

  render() {
    return (
      <>
        <header role="banner">
          <h1>Thinkful Forum Edit Reply Form</h1>
        </header>
        <section>
          <div id="one">[Edit Reply]</div>
          <hr/>
          <div>
            <form className='edit-reply-form' onSubmit={(e) => {this.handleSubmit(e)}}>
              <div>
                {this.threadName()}
              </div>
              <div>
                {/* <label htmlFor="thread-body">Reply:</label> */}
                <textarea rows="10" name="reply-body" value={this.state.content} onChange={this.handleChangeContent} required></textarea>
              </div>
              <div>
                <button type='submit'>Edit Reply</button>
                <button onClick={() => {this.handleGoBack()}}>Go Back</button>
              </div>
            </form>
          </div>
        </section>
      </>
    )
  }
}