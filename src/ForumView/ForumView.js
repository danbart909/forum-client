import React, { Component } from 'react'
// import './ForumView.css'
import { Link } from 'react-router-dom'
import ThreadCard from '../ThreadCard/ThreadCard'

export default class ForumView extends Component {

  renderThreads = () => {
    console.log(this.props)
    const threads = this.props.forumState.threads
    return threads.map(threads =>
      <ThreadCard
        key={threads.id}
        threads={threads}
      />
    )
  }

  render() {
    return (
      <>
        <header role="banner">
          <h1>Thinkful Forum Thread Overview</h1>
        </header>
        <section>
          <div>[page numbers/page information] - <Link to='/forum/post'>New Thread</Link></div>
          <hr/>
          {this.renderThreads()}
          <button onClick={() => {console.log(this.props)}}>this.props</button>
        </section>
      </>
    )
  }
}