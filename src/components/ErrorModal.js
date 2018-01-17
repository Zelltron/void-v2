import React, { Component } from 'react';
// import FontAwesome from 'react-fontawesome';
import $ from 'jquery';

export default class ErrorModal extends Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(event){
    event.preventDefault();
    $('.warning-container').css('display', 'none');
    $('#command-input').css('pointer-events', 'all');
  }

  render() {

    return (
      <div className="error-page">
        <div className="warning-container">
          <div className="warning">
            <div className="warning-bar">
              <div className="warning-title">Warning</div>
              <div className="warning-exit">
                {/* <div className="button-exit">&#10060;</div> */}
                <i className="far fa-times button-exit"></i>
                {/* <FontAwesome
                  className='button-exit'
                  name='times'
                /> */}
              </div>
            </div>
            <div className="warning-content">
              <div className="warning-icon">&#10060;</div>
              <div className="warning-message">
                  <p>{this.props.errorMessage}</p>
              </div>
              <div className="warning-button">
                <span onClick={this.closeModal} className="warning-btn-box">
                  <span className="warning-btn-text">OK</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
