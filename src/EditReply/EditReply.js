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
      return <p>Loading...</p>
    }
  }

  componentDidMount = () => {
    const id = this.props.match.params.id
    const { replies } = this.props.forumState
    const reply = replies.find(x =>
      x.id == id  
    )
    if (reply) {
      this.setState({
        content: reply.content
      })
    }
    else {
      return <p>Loading...</p>
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    let id = this.props.match.params.id
    let threadid = this.props.match.params.threadid
    let content = this.state.content
    let thread = this.props.forumState.threads.find(x => 
      x.id == threadid
    )
    ForumService.editReply(id, content)
    this.props.editReply({id, content})
    this.props.history.push(`/forum/${thread.id}`)
  }

  handleGoBack = () => {
    this.props.history.push('/forum')
  }

  handleChangeContent = e => {
    this.setState({ content: e.target.value })
  }

  render() {
    return (
      <>
        <header role="banner">
          <h1>Thinkful Forum Edit Reply Form</h1>
        </header>
        <section id='s-edit-reply-form'>
          <div id='div-edit-reply-form-container'>
            <form id='form-edit-reply-form' onSubmit={(e) => {this.handleSubmit(e)}}>
              <div id='div-edit-reply-thread-name'>
                {this.threadName()}
              </div>
              <div id='div-edit-reply-body'>
                <textarea rows="10" name="reply-body" value={this.state.content} onChange={this.handleChangeContent} required></textarea>
              </div>
              <div id='div-edit-reply-buttons'>
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