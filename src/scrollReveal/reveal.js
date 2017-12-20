// higher order component to scroll reveal a react component

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import scrollReveal from '../scrollReveal/scrollReveal';

const defaultConfiguration = {
  origin: 'bottom',
  distance: '0px',
  scale: 1,
  duration: 2000,
  delay: 150,
  easing: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
};

export const configurations = {
  normal: defaultConfiguration,
  slowUp: Object.assign({}, defaultConfiguration, {distance: '15px'}),
  fastUp: Object.assign({}, defaultConfiguration, {duration: defaultConfiguration.duration / 2, distance: '30px'}),
  slowLeft: Object.assign({}, defaultConfiguration, {origin: 'right', distance: '15px'}),
  delayed: Object.assign(
    {}, defaultConfiguration,
    {duration: defaultConfiguration.duration / 2, delay: defaultConfiguration.duration / 2 + defaultConfiguration.delay}
  )
};

export default function reveal(WrappedComponent, configuration) {
  return class RevealEnhancer extends Component {
    bindRef(c) {
      this.component = c;
    }

    componentDidMount() {
      const domElement = ReactDOM.findDOMNode(this.component);
      const config = Object.assign({}, defaultConfiguration, configuration);
      scrollReveal.reveal(domElement, config);
    }

    render() {
      const that = this;
      return (
        <WrappedComponent
          ref={
            function (c) {
              that.bindRef(c);
            }
          }
          />
      );
    }
  };
}
