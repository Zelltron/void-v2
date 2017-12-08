import React, { Component } from 'react';
import $ from 'jquery';

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

export default class CommandForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert("Cool name " + this.state.value);
    $("#enter-void").hide();
    $("#command-form").hide();
    $("#loading").attr("src", "./vortex.gif");
    setTimeout(function(){
      $("#loading").remove();
      $("#void-name").show();
    }, 4400)
    this.props.timeline.to($("#loading"), 0.2, {delay: 0.1, opacity: 1});
    this.props.timeline.to($(".centerBox"), 0.6, {delay: 0.3, width: '100%', height: '100%'});
    event.preventDefault();
  }

  render() {
    return (
      <form id="command-form" onSubmit={this.handleSubmit}>
        <p style={styles.pStyle}>{">"}</p>
        <input autoComplete="off" id="command-input" type="text" value={this.state.value} onChange={this.handleChange} maxLength="150"/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
