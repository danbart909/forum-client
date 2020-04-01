import React, { Component } from 'react'
// import './EditThread.css'
import ForumService from '../services/forum-service'
import TokenService from '../services/token-service'

export default class EditThread extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      id: '',
      name: '',
      op: ''
    }
  }

  componentDidMount = () => {
    const threadid = this.props.match.params.threadid
    const { threads } = this.props.forumState
    const thread = threads.find(x =>
      x.id == threadid
    )
    const numberId = Number(threadid)
    if (thread) {
      this.setState({
        id: numberId,
        name: thread.name,
        op: thread.op
      })
    }
    else {
      return <p>Loading...</p>
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    let id = this.props.match.params.threadid
    let name = this.state.name
    let op = this.state.op
    const decodedToken = TokenService.readJwtToken()
    const author = decodedToken.sub
    ForumService.editThread(id, author, name, op)
    this.props.editThread({id, author, name, op})
    this.props.history.push(`/forum/${id}`)
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
          <h1>Thinkful Forum Edit Thread Form</h1>
        </header>
        <section id='s-edit-thread-form'>
          <div id='div-edit-thread-form-container'>
            <form id='form-edit-thread-form' onSubmit={(e) => {this.handleSubmit(e)}}>
              <div id='div-edit-thread-name'>
                <label htmlFor="thread-name">Thread Name:</label>
                <input type="text" name="thread-name" value={this.state.name} onChange={this.handleChangeName} required/>
              </div>
              <div id='div-edit-thread-body'>
                <label htmlFor="thread-body">Thread Body:</label>
                <textarea rows="10" name="thread-body" value={this.state.op} onChange={this.handleChangeOp} required></textarea>
              </div>
              <div id='div-edit-thread-buttons'>
                <button type='submit'>Edit Thread</button>
                <button onClick={() => {this.handleGoBack()}}>Go Back</button>
              </div>
            </form>
          </div>
        </section>
      </>
    )
  }
}