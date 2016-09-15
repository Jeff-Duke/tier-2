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

  updateFollowup() {
    const reference = this.props.reference;
    if(this.state.followup === false) {
      this.setState({followup: true});
      reference.child("followup").set(true);
    }
    else {
      this.setState({followup: false});
      reference.child("followup").set(false);
    }
   }

  render() {
    const contactKey = this.props.contact.key;
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
          <li>Notes: <span role="listitem"> {this.props.contact.notes} </span> </li>
        </ul>
        <div className="ContactActionButtons">
          <label className="ReactToggleContact" role="checkbox">
            <Toggle
            className="FollowupCheckbox"
            checked = {this.state.followup}
            onChange={() => this.updateFollowupChecked()}
            />Follow-up
          </label>
          <div>
            <button className="ContactButton" onClick={() => this.props.handleDeselect()}>^</button>
            <button className="ContactButton" onClick={() => this.props.reference.remove()}>X</button>
          </div>
        </div>
      </div>
    );
  }
}



module.exports = FullContact;
