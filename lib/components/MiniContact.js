import React, { Component } from 'react';
import FullContact from './Contact';
import firebase from '../firebase';

class MiniContact extends Component {
  constructor(props) {
    super();
    this.state={
    };
  }

  render() {

    return (
      <div className='MiniContactCard' onClick={() => this.props.handleClick()} key={this.props.contact.key}>
        <ul>
          <li>Name: {this.props.contact.contactName}</li>
          <li>Company: {this.props.contact.companyName}</li>
          <li>{this.props.contact.followup}</li>
        </ul>
        <button className="DeleteContact" onClick={() => this.props.reference.remove()}>Delete</button>
      </div>
    );
  }
}

module.exports = MiniContact;
