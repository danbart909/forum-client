import React, { Component } from 'react'

export default class ReplyCardButton extends Component {
  render() {
    return (
      <>
        <button onClick={() => {console.log(this.props)}}>edit</button>
      </>
    )
  }
}