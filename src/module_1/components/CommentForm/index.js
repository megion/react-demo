import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.less'

class CommentForm extends Component {
  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = {
      user: '',
      text: '',
    }
  }

  render() {
    return (
      <div onSubmit={this.onSubmit}>
        <form>
          <div className="form-group">
            <label htmlFor="userName">User</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Enter name"
              value={this.state.user}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="userName">User</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Enter name"
              value={this.state.user}
              onChange={this.onChange}
            />
          </div>
        </form>
      </div>
    )
  }

  onSubmit = ev => {
    ev.preventDefault()
    this.setState({
      user: '',
      text: '',
    })
  }
}

export default CommentForm
