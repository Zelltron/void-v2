import './App.css';

import React, {Component} from 'react';
import $ from 'jquery';

import {TimelineMax, Power1} from 'gsap';
import SplitText from './gsap/SplitText.min.js';

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

/// simple rectangle intersection code, so we can work out what part remains visible
let intersect = function(r1, r2, bool) {
    if ( bool ) {
      return !(r2.left > r1.right ||
               r2.right < r1.left ||
               r2.top > r1.bottom ||
               r2.bottom < r1.top);
    }
    else {
        let r3 = {
            left: Math.max(r1.left, r2.left),
            top: Math.max(r1.top, r2.top),
            right: Math.min(r1.right, r2.right),
            bottom: Math.min(r1.bottom, r2.bottom)
        };
        r3.width = r3.right - r3.left;
        r3.height = r3.bottom - r3.top;
        return r3;
    }
}
/// simple function to handle full page scroll, when needed.
let scrollrect = function(r1){
    /// update what we know of the page scroll (this affects ClientRects())
    scrollrect.scrollx = window.pageXOffset || document.documentElement.scrollLeft;
    scrollrect.scrolly = window.pageYOffset || document.documentElement.scrollTop;
    /// all because getBoundingClientRect() returns a read-only object (it seems?)
    return {
        left: r1.left + scrollrect.scrollx,
        top: r1.top + scrollrect.scrolly,
        right: r1.right + scrollrect.scrollx,
        bottom: r1.bottom + scrollrect.scrolly,
        width: r1.width,
        height: r1.height
    };
}
/// add in a jQuery pseudo selector :onscreen, which calculates screen presence
/// based on getBoundingClientRect() and the full page scroll.
$.extend(
  $.expr[':'],
  {
    /// check that an element is actually visible on the screen
    'onscreen': function (el, indx, args) {
      let $el, ov, r1, r2;
      r1 = el.getBoundingClientRect();
      el = el.parentNode;
      $el = $(el);
      /// this should loop back all the way to <body>, ignoring <html>
      do {
          /// handle different states of overflow
          ov = $el.css('overflow') || $el.css('overflow-x') + ':' + $el.css('overflow-y');
          /// special overflow for body
          if ( $el.is('body') ) { ov = 'body'; }
          /// if our parent acts as a rectangular mask, intersect the rects
          switch ( ov ) {
          case 'hidden':
          case 'scroll':
          case 'scroll:hidden':
          case 'hidden:scroll':
              r1 = intersect(r1, el.getBoundingClientRect());
          break;
          case 'body':
              r1 = intersect(r1, scrollrect(el.getBoundingClientRect()));
          break;
          }
          if ( r1.width <= 0 || r1.height <= 0 ) {
              return false;
          }
      } while ((el = el.parentNode) && el.parentNode && ($el[0] = el));
      return true;
    }
  }
);


export default class App extends Component {

  componentDidMount() {
    /// this is the elements we are working out the screen visibility of
    let target = $('.target');

    /// simple update to show result of .filer(':onscreen')
    let update = function(){
        let str = '';
        target.filter(':onscreen').each(function(){
            str += ($(this).attr('id') + 'is on screen');
        });
        console.log(str);
    };


    typingAnimation($(".txt"), tl);
    questionAnimation($(".question"), tl);
    tl.to($("#command-form"), 0.5, {opacity: 1});
    $('.scrollable').add(window).scroll(update);
    update();
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
              <div id="central-body" className="scrollable">
                <div className="tv-row">
                  <div id="tv-con-1" className="tv-container target">
                    <img alt="tv-1" className="mainscreen tv" src={process.env.PUBLIC_URL + "/tv.png"}/>
                  </div>
                  <div id="tv-con-2" className="tv-container target">
                    <img alt="tv-2" className="mainscreen tv" src={process.env.PUBLIC_URL + "/tv.png"}/>
                    <img alt="dog" id="dog" className="mainscreen tv-contents" src={process.env.PUBLIC_URL + "/dog.gif"}/>
                  </div>
                  <div id="tv-con-3" className="tv-container target">
                    <img alt="tv-3" className="mainscreen tv" src={process.env.PUBLIC_URL + "/tv.png"}/>
                  </div>
                  <div id="tv-con-4" className="tv-container target">
                    <img alt="tv-4" className="mainscreen tv" src={process.env.PUBLIC_URL + "/tv.png"}/>
                  </div>
                  <div id="tv-con-5" className="tv-container target">
                    <img alt="tv-5" className="mainscreen tv" src={process.env.PUBLIC_URL + "/tv.png"}/>
                  </div>
                  <div id="tv-con-6" className="tv-container target">
                    <img alt="tv-6" className="mainscreen tv" src={process.env.PUBLIC_URL + "/tv.png"}/>
                  </div>
                </div>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ryanzell"><img alt="linkedin" className="mainscreen linked" src={process.env.PUBLIC_URL + "/linked.png"}/></a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.github.com/zelltron"><img alt="github" className="mainscreen octo" src={process.env.PUBLIC_URL + "/octo.svg"}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
