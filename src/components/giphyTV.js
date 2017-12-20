import React, {Component} from 'react';
import GphApiClient from 'giphy-js-sdk-core';

import GiphyVision from './giphyVision';

const client = GphApiClient(process.env.REACT_APP_GIPHY);
let gifUrls = [];

export default class GiphyTV extends Component {

  state = {
    gifs: []
  }

  componentWillMount() {
    client.search('gifs', {"q": "outer space dogs", "limit" : "3"})
    .then((response) => {
      response.data.forEach((gifObject) => {
        gifUrls.push(gifObject.embed_url);
      })

      this.setState({gifs : gifUrls});
    })
    .catch((err) => {
      console.log('failed to load gifs');
    })
  }

  render(){
    return (
      <div className="tv-row">
        <GiphyVision key="1" embed={this.state.gifs[0]} />
        <GiphyVision key="2" embed={this.state.gifs[1]} />
        <GiphyVision key="3" embed={this.state.gifs[2]} />
      </div>
    );
  }
};
