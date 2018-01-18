import React, { Component } from 'react';
import $ from 'jquery';
import Draggable from 'react-draggable';

export default class ErrorModal extends Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(event){
    event.preventDefault();
    $('.warning-container, .warning').css('display', 'none');
    $('#command-input').css('pointer-events', 'all');
  }

  render() {

    return (
        <Draggable className="warning-container">
          <div className="warning">
            <div className="warning-bar">
              <div className="warning-title">Warning</div>
              <div onClick={this.closeModal} className="warning-exit">
                <i className="far fa-times button-exit"></i>
              </div>
            </div>
            <div className="warning-content">
              <div className="warning-top">
                <div className="warning-icon"><i className="far fa-times error-x"></i></div>
                <div className="warning-message">
                    <p>{this.props.errorMessage}</p>
                </div>
              </div>
              <div className="warning-bottom">
                <div className="warning-button">
                  <span onClick={this.closeModal} className="warning-btn-box">
                    <span className="warning-btn-text">OK</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Draggable>
    );
  }
}
