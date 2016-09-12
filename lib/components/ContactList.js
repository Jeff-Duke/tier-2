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

  render() {
    const contacts = this.state.contacts.map((contact) =>  {
      return <Contact contact={contact}
                      reference={this.reference.child(contact.key)}
                      key={contact.key}
             />
    });

    return (
      <div className="renderContact">
        {contacts}
      </div>
    );
  }
}
