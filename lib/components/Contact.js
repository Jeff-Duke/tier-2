import React, { Component } from 'react';
import firebase from '../firebase';

class FullContact extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <div key={this.props.contact.key} className='FullContactCard'>
        <ul>
          <li>Name: <span>{this.props.contact.contactName}</span></li>
          <li>Company: <span>{this.props.contact.companyName}</span></li>
          <li>Primary Phone: <span>{this.props.contact.primaryPhone}</span></li>
          <li>Secondary Phone:<span>{this.props.contact.secondaryPhone}</span></li>
          <li>Primary Email: <span className="email">{this.props.contact.primaryEmail}</span></li>
          <li>Secondary Email: <span className="email">{this.props.contact.secondaryEmail}</span></li>
          <li>Social Media: <span><a target='_blank' href={this.props.contact.primarySocial}>{this.props.contact.primarySocial}</a></span></li>
          <li>Social Media: <span><a target='_blank' href={this.props.contact.secondarySocial}>{this.props.contact.secondarySocial}</a></span></li>
          <li>{this.props.contact.followup}</li>
          <li>Notes: {this.props.contact.notes}</li>
        </ul>
        <button onClick={() => this.props.handleDeselect()}>Collapse</button>
        <button onClick={() => this.props.reference.remove()}>Delete</button>
      </div>
    );
  }
}

module.exports = FullContact;
