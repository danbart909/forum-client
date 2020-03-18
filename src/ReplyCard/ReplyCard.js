import React, { Component } from 'react'
// import './ReplyCard.css'

export default class ReplyCard extends Component {
  render() {
    return (
      <div>
        {this.props.id}/
        {this.props.author}/
        {this.props.content}
      </div>
    )
  }
}