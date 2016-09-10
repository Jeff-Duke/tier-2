import React from 'react';
import firebase from '../firebase';
import store from '../data-store';

class CreateContact extends React.Component {
  constructor() {
    super();
    this.state = {
      contactName: '',
      companyName: '',
      primaryPhone: '',
      secondaryPhone: '',
      primaryEmail: '',
      secondaryEmail: '',
      followup: true,
    };
  }

  updateProperties(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  updateFollowupChecked(e) {
    this.setState({followup: e.target.checked});
  }

  updateFollowupUnchecked(e) {
    this.setState({followup: !e.target.checked});
  }

  createContact(e) {
    e.preventDefault();
    store.create(this.state);
    this.setState({
      contactName: '',
      companyName: '',
      primaryPhone: '',
      secondaryPhone: '',
      primaryEmail: '',
      secondaryEmail: '',
      followup: true,
    });
  }

  render() {
    return (
    <section className="AddContact">
      <input className="ContactName"
        name="contactName"
        type="text"
        placeholder="First and Last Name"
        value={this.state.contactName}
        onChange={(e) => this.updateProperties(e)}

         />
      <input className="CompanyName"
        name="companyName"
        type="text"
        placeholder="Company Name"
        value={this.state.companyName}
        onChange={(e) => this.updateProperties(e)}

         />
      <input className="PrimaryPhone"
        name="primaryPhone"
        type="tel"
        placeholder="Primary Phone"
        value={this.state.primaryPhone}
        onChange={(e) => this.updateProperties(e)}

         />
      <input className="SecondaryPhone"
        name="secondaryPhone"
        type="tel"
        placeholder="secondary Phone"
        value={this.state.secondaryPhone}
        onChange={(e) => this.updateProperties(e)}

         />
      <input className="PrimaryEmail"
        name="primaryEmail"
        type="email"
        placeholder="Primary Email"
        value={this.state.primaryEmail}
        onChange={(e) => this.updateProperties(e)}

         />
      <input className="SecondaryEmail"
        name="secondaryEmail"
        type="text"
        placeholder="Secondary Email"
        value={this.state.secondaryEmail}
        onChange={(e) => this.updateProperties(e)}

         />
      <label><input className="Followup"
        name="followup"
        type="checkbox"
        value = { this.state.followup }
        defaultChecked = { this.state.followup }
        onChange={(e) => this.updateFollowupChecked(e)}
        
         />Flag for Followup </label>
        
      <button className="NewContactButton"
        onClick={(e) => this.createContact(e)}>
        Add Contact</button>
    </section>
    )
  }
}

module.exports = CreateContact;
