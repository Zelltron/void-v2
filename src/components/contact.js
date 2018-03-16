import React, {Component} from 'react';

export default class Contact extends Component {
  render(){
    return (
      <div id="contact-row" className="reveal">
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ryanzell"><img alt="linkedin" className="mainscreen linked" src={process.env.PUBLIC_URL + "/linked.png"}/></a>
        <a rel="noopener noreferrer" target="_blank" href="https://www.github.com/zelltron"><img alt="github" className="mainscreen octo" src={process.env.PUBLIC_URL + "/octo.svg"}/></a>
        <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/rem_st.8"><img alt="instagram" className="mainscreen insta" src={process.env.PUBLIC_URL + "/insta.png"}/></a>
      </div>
    );
  }
};
