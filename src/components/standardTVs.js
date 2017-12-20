import React, {Component} from 'react';

import TV from './tv';

export default class StandardTVs extends Component {
  render(){
    return (
      <div className="tv-row">
        <TV key="1" imgSrc={process.env.PUBLIC_URL + "/dog.gif"} />
        <TV key="2" imgSrc={process.env.PUBLIC_URL + "/carl.gif"} />
        <TV key="3" imgSrc={process.env.PUBLIC_URL + "/ghost.gif"} />
      </div>
    );
  }
};
