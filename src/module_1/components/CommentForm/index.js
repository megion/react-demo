import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { addComment } from "../../AC"

import "./index.less"

class CommentForm extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    // from redux connect: addComment(comment, article)
    addComment: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      user: "",
      text: "",
      submitted: false,
    }
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className={`needs-validation ${
          this.state.submitted ? "was-validated" : ""
        }`}
        noValidate
      >
        <div className="form-group">
          <label htmlFor="userName">User</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="Enter name"
            value={this.state.user}
            onChange={this.onChange("user")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="commentTxt">Comment</label>
          <input
            type="text"
            className="form-control"
            id="commentTxt"
            placeholder="Enter comment"
            value={this.state.text}
            onChange={this.onChange("text")}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    )
  }

  onSubmit = ev => {
    ev.preventDefault()
    this.setState({
      user: "",
      text: "",
      submitted: true,
    })
    this.props.addComment(
      { text: this.state.text, user: this.state.user },
      this.props.article
    )
  }

  onChange = type => ev => {
    const { value } = ev.target
    this.setState({
      [type]: value,
    })
  }
}

export default connect(
  null,
  { addComment }
)(CommentForm)
