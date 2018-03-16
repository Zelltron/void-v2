import React, {Component} from 'react';
import $ from 'jquery';
// import reveal from '../scrollReveal/reveal';
let isMobile = 'false';

if (/Mobi/.test(navigator.userAgent)) {
    isMobile = true;
}


export default class TV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile
    };

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {
    $($(event.target).find('.tv-fuz')).removeClass('hidden');
  }

  render(){
    return (
      <div className="tv-container reveal"  onClick={this.handleClick}>
        <img alt="tv-box" className="mainscreen tv" src={process.env.PUBLIC_URL + "/tv.png"}/>
        <img alt="fuz" className="mainscreen tv-contents tv-fuz hidden" src={process.env.PUBLIC_URL + "/fuz.gif"}/>
        <img alt="on-tv" className="mainscreen tv-contents" src={"" + this.props.imgSrc}/>
      </div>
    );
  }
};

// export default reveal(TV);
