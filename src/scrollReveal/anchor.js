// higher order component to provide an anchor with the final position of an element

import React, {Component} from 'react';

export default function anchor(WrappedComponent, id) {
  return class AnchorEnhancer extends Component {
    render() {
      return (
        <div id={id}>
          <WrappedComponent/>
        </div>
      );
    }
  };
}
