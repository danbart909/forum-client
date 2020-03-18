import React, { Component } from 'react'
// import './ThreadView.css'
import { Link } from 'react-router-dom'
import ReplyCard from '../ReplyCard/ReplyCard'

export default class ThreadView extends Component {

  renderOP = () => {
    const threadId = this.props.match.params.id
    const threads = this.props.state.threads
    console.log(threads)
    const thread = threads.find(x =>
      x.id == threadId
    )
    return (
      <section className='thread'>
        {thread.id}<br/>
        {thread.name}<br/>
        {thread.author}<br/>
        {thread.op}
      </section>
    )
  }

  renderReplies = () => {
    const threadId = this.props.match.params.id
    const replies = this.props.state.replies
    const theseReplies = replies.filter(x =>
      x.threadid == threadId
    )
    return (
      <section className='replies'>
        <ul>
          {theseReplies.map(reply =>
            <li key={reply.id}>
              <ReplyCard
                id={reply.id}
                threadId={reply.threadid}
                author={reply.author}
                content={reply.content}
              />
            </li>
          )}
        </ul>
      </section>
    )
  }



  render() {
    const threadId = this.props.match.params.id
    return (
      <div>
        Thread View
        {this.renderOP()}
        {this.renderReplies()}
        <Link to={`/forum/${threadId}/reply`}><button>post reply</button></Link>
        <button onClick={() => {console.log(this.props)}}>this.props</button>
      </div>
    )
  }
}