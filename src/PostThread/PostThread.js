import React, { Component } from 'react'
import ForumService from '../services/forum-service'
import TokenService from '../services/token-service'
export default class PostThread extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      name: '',
      op: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const decodedToken = TokenService.readJwtToken()
    const author = decodedToken.sub
    let name = this.state.name
    let op = this.state.op
    ForumService.postThread(author, name, op)
      .then(thread => {
        this.props.addThread(thread)
        this.props.history.push(`/forum/${thread.id}`)
      })
  }

  handleGoBack = () => {
    this.props.history.push('/forum')
  }

  handleChangeName = e => {
    this.setState({ name: e.target.value })
  }

  handleChangeOp = e => {
    this.setState({ op: e.target.value })
  }

  render() {
    return (
      <>
        <header role="banner">
          <h1>Thinkful Forum New Thread Form</h1>
        </header>
        <section id='s-post-thread-form'>
          <div id='div-post-thread-form-container'>
            <form id='form-post-thread-form' onSubmit={(e) => {this.handleSubmit(e)}}>
              <div id='div-post-thread-name'>
                <label htmlFor="thread-name">Thread Name:</label>
                <input type="text" name="thread-name" onChange={this.handleChangeName} required/>
              </div>
              <div id='div-post-thread-body'>
                <label htmlFor="thread-body">Thread Body:</label>
                <textarea rows="10" name="thread-body" onChange={this.handleChangeOp} required></textarea>
              </div>
              <div id='div-post-thread-buttons'>
                <button type='submit' disabled={!this.state.name || !this.state.op}>Post Thread</button>
                <button onClick={() => {this.handleGoBack()}}>Go Back</button>
              </div>
            </form>
          </div>
        </section>
      </>
    )
  }
}