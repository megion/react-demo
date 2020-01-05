import React, { Component } from "react"
import { Consumer } from "./context"

export default Component =>
  class LocalizedText extends Component {
    render() {
      /**
       * use render props pattern
       */
      return (
        <Consumer>
          {dictionary => (
            <Component
              {...this.props}
              translate={this.createTranslate(dictionary)}
            />
          )}
        </Consumer>
      )
    }

    createTranslate = dictionary => text => dictionary[text] || text
  }
