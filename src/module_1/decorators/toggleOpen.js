import React, {Component as ReactComponent} from 'react';

function getWrapper(OriginalComponent) {
  return class WrappedComponent extends ReactComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false,
      };
    }

    toggleOpen = event => {
      event.preventDefault();
      console.log('toggleOpen event:', event);
      this.setState({
        isOpen: !this.state.isOpen,
      });
    };

    render() {
      /*
       * use spread agrguments (...args)
       */
      return (
        <OriginalComponent
          {...this.props}
          isOpen={this.state.isOpen}
          toggleOpen={this.toggleOpen}
        />
      );
    }
  };
}

export default getWrapper;
