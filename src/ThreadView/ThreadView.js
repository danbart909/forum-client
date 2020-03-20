import React, { Component } from 'react'
// import './ThreadView.css'
import { Link } from 'react-router-dom'
import ReplyCard from '../ReplyCard/ReplyCard'

export default class ThreadView extends Component {
  // static defaultProps = {
  //     threads: [ {id: 1}, {id: 2}, {id: 3} ],
  //     replies: [ {id: 1}, {id: 2}, {id: 3} ]
  // }


  componentDidMount() {
    console.log(this.props)
  }

  renderOP = () => {
    const threadId = this.props.match.params.id
    console.log(this.props)
    const threads = this.props.forumState.threads
    console.log(threads)
    const thread = threads.find(x =>
      x.id == threadId
    )
    if (thread) {
      return (
        <section className='thread'>
          {thread.id}<br/>
          {thread.name}<br/>
          {thread.author}<br/>
          {thread.op}
        </section>
      )
    }
    else {
      return <p>Loading... Please Wait</p>
    }
  }

  renderReplies = () => {
    const threadId = this.props.match.params.id
    const replies = this.props.forumState.replies
    const theseReplies = replies.filter(x =>
      x.threadid == threadId
    )
    if (theseReplies) {
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
    else {
      return <p>Loading... Please Wait</p>
    }
  }

  render() {
    const threadId = this.props.match.params.id
    return (
      <div>
        {this.renderOP()}
        {this.renderReplies()}
        <Link to={`/forum/${threadId}/reply`}><button>post reply</button></Link>
        <button onClick={() => {console.log(this.props)}}>this.props</button>
      </div>
    )
  }
}