import React, { Component } from 'react'
// import './ForumView.css'
import { Link } from 'react-router-dom'

export default class ForumView extends Component {
  render() {
    return (
      <>
        <header role="banner">
          <h1>Thinkful Forum Thread Overview</h1>
        </header>
        <section>
          <div>[page numbers/page information] - <Link to='/forum/post'>New Thread</Link></div>
          <hr/>
          <div>[thread/author/number of replies]</div>
          <div>[thread/author/number of replies]</div>
          <div>[thread/author/number of replies]</div>
          <div>[thread/author/number of replies]</div>
          <div>[thread/author/number of replies]</div>
          <div>[thread/author/number of replies]</div>
          <div>[thread/author/number of replies]</div>
          <div>[thread/author/number of replies]</div>
          <div>[thread/author/number of replies]</div>
        </section>
      </>
    )
  }
}