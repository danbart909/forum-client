import React, { Component } from 'react'
// import './ThreadCard.css'
import { Link } from 'react-router-dom'

export default class ThreadCard extends Component {
  render() {
    return (
      <div className='ThreadCard'>
        <button
          type='button'
          onClick={() => {console.log(this.props)}}
          // onClick={props.onDelete}
        >
          this.props
        </button>
        <Link to={`/forum/${this.props.threads.id}`}><h4>{this.props.threads.name}</h4></Link>
        <p>{this.props.threads.id}</p>
        <p>{this.props.threads.author}</p>
      </div>
    )
  }
}