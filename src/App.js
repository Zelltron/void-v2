import './App.css';

import React, {Component} from 'react';
import $ from 'jquery';

import {TimelineMax, Power1} from 'gsap';
import SplitText from './gsap/SplitText.min.js';
import ScrollReveal from 'scrollreveal';

import CommandForm from './commandForm';

function typingAnimation(text, timeline) {
  text.each(function() {
    let mySplitText = new SplitText(this, {type: "words,chars"});
    let chars = mySplitText.chars;
    timeline.staggerFrom(chars, 0.01, {
      opacity: 0,
      ease: Power1.easeIn
    }, 0.08, "+=0.1");
    timeline.to(this, 0.6, {
      delay: 0.8,
      opacity: 0
    });
  });
}

function questionAnimation(text, timeline) {
  text.each(function() {
    let mySplitText = new SplitText(this, {type: "words,chars"});
    let chars = mySplitText.chars;
    timeline.staggerFrom(chars, 0.01, {
      opacity: 0,
      ease: Power1.easeIn
    }, 0.08, "+=0.1");
  });
}

const tl = new TimelineMax();



export default class App extends Component {

  componentDidMount() {
    ScrollReveal({ reset: true, container: '.body-row'}).reveal('.reveal', 50);

    typingAnimation($(".txt"), tl);
    questionAnimation($(".question"), tl);
    tl.to($("#command-form"), 0.5, {opacity: 1});
  }

  render() {
    return (
      <div className="App">
        <div className="body">
          <img alt="frame" src={process.env.PUBLIC_URL + "/frame.png"} id="frame"/>
          <div className="centerBox">
            <div className="scanlines">
              <div className="boxText" id="textHolder">
                <h3 className="txt">{"Hello, I'm Ryan."}</h3>
                <h3 className="txt">{"What's up?"}</h3>
                <h3 className="txt">{"≧◡≦"}</h3>
                <h3 id="welcome" className="txt">{"Welcome!"}</h3>
                <h3 className="question" id="enter-void">{"Enter V.O.I.D.?"}</h3>
                <h3 id="void-name">{"Very Odd Independent Design"}</h3>
              </div>
              <img alt="portal" id="loading"/>
              <div className="space"></div>
              <div className="space-container">
                <div className="space-wrapper">
                  <div className="blackhole">
                    <div className="debris"></div>
                    <div className="debris"></div>
                    <div className="debris"></div>
                    <div className="debris"></div>
                    <div className="debris"></div>
                    <div className="debris"></div>
                    <div className="debris"></div>
                    <div className="debris"></div>
                  </div>
                </div>
              </div>
              <CommandForm {...this.props} timeline={tl}/>
              <div id="central-body" className="body-row">
                <div id="tv-con-1" className="tv-container reveal">
                  <img alt="tv-1" className="mainscreen tv" src={process.env.PUBLIC_URL + "/tv.png"}/>
                </div>
                <div id="tv-con-2" className="tv-container reveal">
                  <img alt="tv-2" className="mainscreen tv" src={process.env.PUBLIC_URL + "/tv.png"}/>
                  <img alt="dog" id="dog" className="mainscreen tv-contents" src={process.env.PUBLIC_URL + "/dog.gif"}/>
                </div>
                <div id="tv-con-3" className="tv-container reveal">
                  <img alt="tv-3" className="mainscreen tv" src={process.env.PUBLIC_URL + "/tv.png"}/>
                </div>
                <div id="tv-con-4" className="tv-container reveal">
                  <img alt="tv-4" className="mainscreen tv" src={process.env.PUBLIC_URL + "/tv.png"}/>
                </div>
                <div id="tv-con-5" className="tv-container reveal">
                  <img alt="tv-5" className="mainscreen tv" src={process.env.PUBLIC_URL + "/tv.png"}/>
                </div>
                <div id="tv-con-6" className="tv-container reveal">
                  <img alt="tv-6" className="mainscreen tv" src={process.env.PUBLIC_URL + "/tv.png"}/>
                </div>
                <div id="contact-row" className="reveal">
                  <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ryanzell"><img alt="linkedin" className="mainscreen linked" src={process.env.PUBLIC_URL + "/linked.png"}/></a>
                  <a rel="noopener noreferrer" target="_blank" href="https://www.github.com/zelltron"><img alt="github" className="mainscreen octo" src={process.env.PUBLIC_URL + "/octo.svg"}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
