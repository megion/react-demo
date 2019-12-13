import React, { Component } from "react"
import PropTypes from "prop-types"

class CheckboxWithLabel extends Component {
  static propTypes = {
    labelOn: PropTypes.string.isRequired,
    labelOff: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {isChecked: false};
  }

  onChange = () => {
    this.setState({isChecked: !this.state.isChecked});
  };

  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}

export default CheckboxWithLabel
