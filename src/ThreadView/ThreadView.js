import React, { Component } from 'react'
// import './ThreadView.css'
import { Link } from 'react-router-dom'
import ReplyCard from '../ReplyCard/ReplyCard'
import ForumService from '../services/forum-service'

export default class ThreadView extends Component {

  // componentDidMount() {
  //   console.log(this.props)
  // }

  deleteThread = () => {
    let id = this.props.match.params.threadid
    ForumService.deleteThread(id)
    this.props.history.push(`/forum`)
  }

  renderOP = () => {
    const threadId = this.props.match.params.threadid
    const threads = this.props.forumState.threads
    const thread = threads.find(x =>
      x.id == threadId
    )
    if (thread) {
      return (
        <section className='thread'>
          <div>
            <p>#{thread.id} - {thread.author} - {thread.name}</p>
            <p>{thread.op}</p>
          </div>
          <Link to={`/forum/${thread.id}/edit`}><button>edit</button></Link>
          <button onClick={() => {this.deleteThread()}}>delete</button>
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
    const theseReplies = replies.filter(x =>
      x.threadid == threadId
    )
    if (theseReplies) {
      return (
        <section className='replies'>
            {theseReplies.map(reply =>
              <div key={reply.id}>
                <ReplyCard
                  id={reply.id}
                  threadId={reply.threadid}
                  author={reply.author}
                  content={reply.content}
                  history={history}
                  threads={this.props.forumState.threads}
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
    const threadId = this.props.match.params.threadid
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