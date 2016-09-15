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
      <div key={this.props.contact.key} className='FullContactCard' role="article">
        <ul>
          <li>Name: <span role="listitem">{this.props.contact.contactName}</span></li>
          <li>Company: <span role="listitem">{this.props.contact.companyName}</span></li>
          <li>Primary Phone: <span role="listitem">{this.props.contact.primaryPhone}</span></li>
          <li>Secondary Phone:<span role="listitem">{this.props.contact.secondaryPhone}</span></li>
          <li>Primary Email: <span role="listitem" className="email">{this.props.contact.primaryEmail}</span></li>
          <li>Secondary Email: <span role="listitem" className="email">{this.props.contact.secondaryEmail}</span></li>
          <li>Social Media: <span role="listitem"><a target='_blank' href={this.props.contact.primarySocial}>{this.props.contact.primarySocial}</a></span></li>
          <li>Social Media: <span role="listitem"><a target='_blank' href={this.props.contact.secondarySocial}>{this.props.contact.secondarySocial}</a></span></li>
          <li>{this.props.contact.followup}</li>
          <li>Notes: <span role="listitem"> {this.props.contact.notes} </span> </li>
        </ul>
        <label className="react-toggle-label" role="checkbox">
          <Toggle
          name="followup"
          className="FollowupCheckbox"
          checked = {this.state.followup}
          onChange={() => this.updateFollowupChecked()}
          />Follow-up
        </label>
        <button className="ContactButton" onClick={() => this.props.handleDeselect()}>^</button>
        <button className="ContactButton" onClick={() => this.props.reference.remove()}>X</button>
      </div>
    );
  }
}



module.exports = FullContact;
