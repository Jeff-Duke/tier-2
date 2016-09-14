import React, { Component } from 'react';
import FullContact from './Contact';
import firebase from '../firebase';

class MiniContact extends Component {
  constructor(props) {
    super();
  }

  render() {

    return (
      <div className='MiniContactCard' onClick={() => this.props.handleClick()} key={this.props.contact.key}>
        <ul>
          <li>Name: {this.props.contact.contactName}</li>
          <li>Company: {this.props.contact.companyName}</li>
          <li>{this.props.contact.followup}</li>
        </ul>
        <button className="ExpandContact" onClick={() => this.props.handleClick()}>+</button>
      </div>
    );
  }
}

module.exports = MiniContact;
