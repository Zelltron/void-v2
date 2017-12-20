import React, {Component} from 'react';
// import reveal from '../scrollReveal/reveal';

export default class TV extends Component {
  render(){
    return (
      <div className="tv-container reveal">
        <img alt="tv-box" className="mainscreen tv" src={process.env.PUBLIC_URL + "/tv.png"}/>
        <img alt="dog" className="mainscreen tv-contents" src={"" + this.props.imgSrc}/>
      </div>
    );
  }
};

// export default reveal(TV);
