import React, { Component } from 'react';
import firebase from '../firebase';
import CreateContact from './CreateContact';
import Toggle from 'react-toggle';

class FullContact extends Component {
  constructor(props) {
    super(props);
      this.state = {
        followup: this.props.contact.followup,
      };
    }

  updateFollowupChecked() {
    if(this.state.followup === false) {
      this.setState({followup: true});
      this.props.contact.followup = true;
    }
    else {
      this.setState({followup: false});
      this.props.contact.followup = false;
    }
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
          <li>Notes: <span> {this.props.contact.notes} </span> </li>
        </ul>
        <button className="ContactButton" onClick={() => this.props.handleDeselect()}>^</button>
        <button className="ContactButton" onClick={() => this.props.reference.remove()}>X</button>
      </div>
    );
  }
}



module.exports = FullContact;
