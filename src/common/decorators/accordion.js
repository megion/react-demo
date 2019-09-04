import React, {Component as ReactComponent} from 'react';

function getWrapper(OriginalComponent) {
  return class Accordion extends ReactComponent {
    constructor(props) {
      super(props);

      /*
       * Store children component state in parent.
       * Article state parameter 'open' is passed to children by prop 'isOpen'
       * This approach is called State Lifting.
       */
      this.state = {
        openItemId: null,
      };
    }

    /*
     * Curring functions.
     *
     * Function is passed to the children components.
     * This approach is called Reverse Data Flow.
     */
    toggleOpenItem = openItemId => event => {
      console.log('toggleOpenItem event:', event, 'openItemId', openItemId);
      this.setState({
        openItemId: openItemId === this.state.openItemId ? null : openItemId,
      });
    };

    render() {
      /*
       * use spread agrguments (...args)
       */
      return (
        <OriginalComponent
          {...this.props}
          openItemId={this.state.openItemId}
          toggleOpenItem={this.toggleOpenItem}
        />
      );
    }
  };
}

export default getWrapper;
