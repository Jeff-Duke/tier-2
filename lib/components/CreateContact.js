import React, { Component } from 'react';
import firebase from '../firebase';
import Toggle from 'react-toggle';

export default class CreateContact extends Component {
  constructor() {
    super();
    this.state = {
      contactName: '',
      companyName: '',
      primaryPhone: '',
      secondaryPhone: '',
      primaryEmail: '',
      secondaryEmail: '',
      primarySocial: '',
      secondarySocial: '',
      followup: true,
      notes: ''
    };
  }

  createContact(e) {
    e.preventDefault();
    const reference = firebase.database().ref(`${firebase.auth().currentUser.uid}/contact-list`);
    reference.push(this.state);
    this.setState({
      contactName: '',
      companyName: '',
      primaryPhone: '',
      secondaryPhone: '',
      primaryEmail: '',
      secondaryEmail: '',
      primarySocial: '',
      secondarySocial: '',
      followup: true,
      notes: ''
    });
  }

  updateProperties(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  updateFollowupChecked(e) {
   this.setState({followup: e.target.checked});
 }

  render() {
    return (
    <form className="CreateContact" onSubmit = {this.createContact.bind(this)}>
      <input
        placeholder="First & Last Name"
        name="contactName"
        type="text"
        value={this.state.contactName}
        onChange={(e) => this.updateProperties(e)}
        aria-label="First & Last Name"
      />

      <input className="CompanyName"
        placeholder="Company Name"
        name="companyName"
        type="text"
        value={this.state.companyName}
        onChange={(e) => this.updateProperties(e)}
        aria-label="Company Name"
      />

      <input className="PrimaryPhone"
        placeholder="Primary Phone"
        name="primaryPhone"
        type="text"
        value={this.state.primaryPhone}
        onChange={(e) => this.updateProperties(e)}
        aria-label="Primary Phone"
      />

      <input className="SecondaryPhone"
        placeholder="Secondary Phone"
        name="secondaryPhone"
        type="text"
        value={this.state.secondaryPhone}
        onChange={(e) => this.updateProperties(e)}
        aria-label="Secondary Phone"
      />

      <input className="PrimaryEmail"
        placeholder="Primary Email"
        name="primaryEmail"
        type="email"
        value={this.state.primaryEmail}
        onChange={(e) => this.updateProperties(e)}
        aria-label="Primary Email"
      />

      <input className="SecondaryEmail"
        placeholder="Secondary Email"
        name="secondaryEmail"
        type="text"
        value={this.state.secondaryEmail}
        onChange={(e) => this.updateProperties(e)}
        aria-label="Secondary Email"
      />

      <input className="PrimarySocial"
        placeholder="Primary Social Media URL"
        name="primarySocial"
        type="text"
        value={this.state.primarySocial}
        onChange={(e) => this.updateProperties(e)}
        aria-label="Primary Social Media URL"
      />

      <input className="SecondarySocial"
        placeholder="Secondary Social Media URL"
        name="secondarySocial"
        type="text"
        value={this.state.secondarySocial}
        onChange={(e) => this.updateProperties(e)}
        aria-label="Secondary Social Media URL"
      />

      <textarea className="Notes"
        placeholder="Notes"
        name="notes"
        type="text"
        rows="4"
        cols="20"
        wrap="hard"
        value={this.state.notes}
        onChange={(e) => this.updateProperties(e)}
        aria-label="Notes"
      />

    <label className="react-toggle-label" role="checkbox" aria-checked="true">
        <Toggle
        className="FollowupCheckbox"
        checked = {this.state.followup}
        onChange={(e) => this.updateFollowupChecked(e)}
        />Flag for Follow-up
      </label>

      <input className="CreateContactButton"
        type="submit"
        value="Create Contact"
      />
    </form>
    );
  }
}
