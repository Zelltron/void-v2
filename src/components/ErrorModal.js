import React, { Component } from 'react';
import $ from 'jquery';

export default class ErrorModal extends Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(event){
    event.preventDefault();
    $('.error-modal').css('display', 'none');
    $('#command-input').css('pointer-events', 'all');
  }

  render() {

    return (
      <div className="error-page">
        <div className="error-modal">
          <p>{this.props.errorMessage}</p>
          <button className="btn btn-default close-button" onClick={this.closeModal}>Close</button>
        </div>
      </div>
    );
  }
}
