import React, { Component } from 'react';
import $ from 'jquery';
import {TimelineMax, Power1} from 'gsap';

import ErrorModal from './ErrorModal';

let isMobile = 'false';

if (/Mobi/.test(navigator.userAgent)) {
    isMobile = true;
}

const styles = {
  pStyle: {
    marginLeft: '0.5em !important',
    marginTop: '0.5em !important',
    marginBottom: '0.5em !important'
  }
}

const tl2 = new TimelineMax( {paused: true, repeat: -1,yoyo:true} );

export default class CommandForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      value: '',
      errorMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeYes = this.handleChangeYes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleChangeYes(event) {
    this.setState({value: 'Yes'});
  }

  handleSubmit(event) {
    event.preventDefault();
    $( "#command-input" ).blur();
    $("#enter-void, #command-form").hide();
    $("#loading").attr("src", process.env.PUBLIC_URL + "/vortex.gif");
    setTimeout(function(){
      $("#loading").remove();
      $(".space, #void-name, .mainscreen").show();
      $(".space-container").css('display', 'flex');
    }, 4400)
    this.props.timeline.to($("#loading"), 0.2, {delay: 0.1, opacity: 1});
    this.props.timeline.to($(".centerBox"), 0.6, {delay: 0.3, width: '100%', height: '100%'});
    tl2.to( $(".tv-row") , 1.3, { y: "-=5px", ease: Power1.easeInOut } );
    tl2.play();
  }

  validate(displayModal, event) {
    if(displayModal === true){
      this.setState({errorMessage: 'Please submit an answer.'});
      $('.warning-container').css('display', 'block');
      $('#command-input').css('pointer-events', 'none');
    }else{
      this.handleSubmit(event);
    }
  }

  render() {
    const isEnabled = this.state.value.length > 0;

    return (
      <div>
        <ErrorModal errorMessage={this.state.errorMessage} />
        <form id="command-form" onSubmit={this.handleSubmit}>
          <p style={styles.pStyle}>{">"}</p>
          <input autoFocus="true" autoComplete="off" id="command-input" type="text" value={this.state.value} onChange={this.handleChangeYes} maxLength="3"/>
          <div id="contain-submit">
            <input type="submit" id="enter-submit" disabled={!isEnabled} value="Submit" />
            <div id="validation" onClick={this.validate.bind(this, !isEnabled)}></div>
          </div>
        </form>
      </div>
    );
  }
}
