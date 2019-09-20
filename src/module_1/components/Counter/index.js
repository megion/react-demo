import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { increment } from "../../AC"

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>{counter}</h2>
        <button onClick={this.onIncrementClick}>Increment me</button>
      </div>
    )
  }

  onIncrementClick = () => {
    console.log("incrementing")
    // function props.dispatch was added by mapStateToProps
    //this.props.dispatch(increment());

    this.props.increment()
  }
}

//function mapStateToProps(state) {
//return {
//counter: state.count
//}
//}
//const mapToDispatch = {increment}
//const decorator = connect(mapStateToProps, mapToDispatch)
//export default decorator(Counter)


export default connect(
  state => {
    return {
      counter: state.count,
    }
  },
  { increment }
)(Counter)
