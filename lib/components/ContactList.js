import React, { Component } from 'react';
import firebase from '../firebase';
import CreateContact from './CreateContact';
import Contact from './Contact';
import MiniContact from './MiniContact';
const split = require('split-object');

export default class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      selectedContact: null,
      followupList: false,
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
    //if this.state.followup list -> then contacts needs to be the filtered list
    //else contacts needs to be this.state.contacts
    //our mini vs max just needs to be contacts.forEach and pass in contact
    let contacts = this.state.contacts.map((contact) =>  {
      if (this.state.selectedContact) {
        return <Contact contact={contact}
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

      if (this.state.followupList) {
        this.state.contacts.filter(function (contact) {
          return contact.followup === true;
        });
      }

    return (

      <div className="renderContact">
        <button className="SortButton"
                children="Sort By Follow-up"
                onClick={() => this.setState({ followupList: true })}
            />
        {contacts}
      </div>
    );
  }
}
