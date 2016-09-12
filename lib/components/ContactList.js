import React, { Component } from 'react';
import firebase from '../firebase';
import CreateContact from './CreateContact';
import Contact from './Contact';
const split = require('split-object');

export default class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
    };
  }

  get reference() {
    return firebase.database().ref(`${firebase.auth().currentUser.uid}/contact-list`);
  }

  componentDidMount() {
    this.reference.on('value', (snapshot) => {
      let contacts = snapshot.val();
      if(!contacts) { return this.setState({ contacts: [] }); }
      contacts = split(contacts).map(contact => Object.assign({ key: contact.key }, contact.value));
      this.setState({
        contacts
      });
    });
  }

  componentWillUnmount() {
    this.reference.off();
  }

  loadContacts() {
    const reference = firebase.database().ref(`${firebase.auth().currentUser.uid}/contact-list`);
    return this.state.contacts.map(function (contact, index) {
      return (
        <div key={contact.key}>
          <ul>
            <li>{contact.contactName}</li>
            <li>{contact.companyName}</li>
            <li>{contact.primaryPhone}</li>
            <li>{contact.secondaryPhone}</li>
            <li>{contact.primaryEmail}</li>
            <li>{contact.secondaryEmail}</li>
            <li>{contact.primarySocial}</li>
            <li>{contact.secondarySocial}</li>
            <li>{contact.followup}</li>
            <li>{contact.notes}</li>
          </ul>
          <button onClick={() => reference.child(contact.key).remove()}>Delete</button>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="renderContact">
      <h1>{this.loadContacts()}</h1>
      </div>
    );
  }
}
