import React, {Component} from 'react';
// import reveal from '../scrollReveal/reveal';

export default class GiphyVision extends Component {
  render(){
    return (
      <div className="tv-container reveal">
        <img alt="tv-box" className="mainscreen tv" src={process.env.PUBLIC_URL + "/tv.png"}/>
        <iframe src={"" + this.props.embed} frameBorder="0" className="giphy-embed mainscreen tv-contents" allowFullScreen></iframe>
        {/* <img alt="dog" className="mainscreen tv-contents" src={"" + this.props.imgSrc}/> */}
      </div>
    );
  }
};

// export default reveal(GiphyVision);
