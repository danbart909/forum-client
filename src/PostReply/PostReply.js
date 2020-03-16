import React, { Component } from 'react'
// import './PostReply.css'

export default class PostReply extends Component {
  render() {
    return (
      <>
        <header role="banner">
          <h1>Thinkful Forum New Reply Form</h1>
        </header>
        <section>
          <div id="one">[Post New Reply]</div>
          <hr/>
          <div>
            <form>
              <div>
                *name of thread*
              </div>
              <div>
                {/* <label htmlFor="thread-body">Reply:</label> */}
                <textarea rows="10" name="reply-body" required></textarea>
              </div>
              <div>
                <button>Post Reply</button>
                <button>Go Back</button>
              </div>
            </form>
          </div>
        </section>
      </>
    )
  }
}
