import React, { Component } from 'react'
// import './PostThread.css'

export default class PostThread extends Component {
  render() {
    return (
      <>
        <header role="banner">
          <h1>Thinkful Forum New Thread Form</h1>
        </header>
        <section>
          <div id="one">[Post New Thread]</div>
          <hr/>
          <div>
            <form>
              <div>
                <label htmlFor="thread-name">Thread Name:</label>
                <input type="text" name="thread-name" required/>
              </div>
              <div>
                <label htmlFor="thread-body">Thread Body:</label>
                <textarea rows="10" name="thread-body" required></textarea>
              </div>
              <div>
                <button>Post Thread</button>
                <button>Go Back</button>
              </div>
            </form>
          </div>
        </section>
      </>
    )
  }
}