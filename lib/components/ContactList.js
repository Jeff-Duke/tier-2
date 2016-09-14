import React, { Component } from 'react';
import firebase from '../firebase';
import CreateContact from './CreateContact';
import FullContact from './Contact';
import MiniContact from './MiniContact';
const split = require('split-object');

export default class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      selectedContact: null,
      followupList: false,
      followupButton: 'Sort By Follow-up',
    };
  }

  get reference() {
    return firebase.database().ref(`${firebase.auth().currentUser.uid}/contact-list`);
  }

  toggleFollowUp() {
   this.state.followupList === false ? this.setState({ followupList: true, followupButton: 'Show All Contacts' }) : this.setState({ followupList: false, followupButton: 'Sort By Follow-up' });
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

  handleDeselect() {
    this.setState({ selectedContact: null });
  }

  render() {
    let arrayOfContacts = this.state.contacts;
      if (this.state.followupList)  {
        arrayOfContacts = this.state.contacts.filter((contact) => {
          return contact.followup === true;
        });
      }

    let returnedContacts = arrayOfContacts.map((contact) =>  {
      if (this.state.selectedContact === contact) {

        return <FullContact contact={contact}
                  handleDeselect={() => this.setState({ selectedContact: null })}
                  reference={this.reference.child(contact.key)}
                  key={contact.key}
               />
        }
        return <MiniContact contact={contact}
                  handleClick={() => this.setState({ selectedContact: contact })}
                  reference={this.reference.child(contact.key)}
                  key={contact.key}
               />
      });

    const contacts = returnedContacts;
    return (
      <div className="renderContact">
        <button className="SortButton"
          children={this.state.followupButton}
          onClick={ () => this.toggleFollowUp() }
        />
        {contacts}
      </div>
    );
  }
}
