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
          <li>Name: {this.props.contact.contactName}</li>
          <li>Company: {this.props.contact.companyName}</li>
          <li>Primary Phone: {this.props.contact.primaryPhone}</li>
          <li>Secondary Phone:{this.props.contact.secondaryPhone}</li>
          <li>Primary Email: {this.props.contact.primaryEmail}</li>
          <li>Secondary Email: {this.props.contact.secondaryEmail}</li>
          <li>Social Media: <a target='_blank' href={this.props.contact.primarySocial}>{this.props.contact.primarySocial}</a></li>
          <li>Social Media: <a target='_blank' href={this.props.contact.secondarySocial}>{this.props.contact.secondarySocial}</a></li>
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
