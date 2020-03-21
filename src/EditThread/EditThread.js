import React, { Component } from 'react'
// import './EditThread.css'
import ForumService from '../services/forum-service'

export default class EditThread extends Component {
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
    let id = this.props.match.params.threadid
    let name = this.state.name
    let op = this.state.op
    ForumService.editThread(id, name, op)
    this.props.history.push(`/threads/${id}`)
    console.log(id, name, op)
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
        <section>
          <div id="one">[Edit Thread]</div>
          <hr/>
          <div>
            <form className='edit-thread-form' onSubmit={(e) => {this.handleSubmit(e)}}>
              <div>
                <label htmlFor="thread-name">Thread Name:</label>
                <input type="text" name="thread-name" onChange={this.handleChangeName} required/>
              </div>
              <div>
                <label htmlFor="thread-body">Thread Body:</label>
                <textarea rows="10" name="thread-body" onChange={this.handleChangeOp} required></textarea>
              </div>
              <div>
                <button type='submit'>Post Thread</button>
                <button onClick={() => {this.handleGoBack()}}>Go Back</button>
              </div>
            </form>
          </div>
        </section>
      </>
    )
  }
}