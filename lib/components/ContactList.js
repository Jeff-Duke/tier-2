import React, { Component } from 'react';
import firebase from '../firebase';
import CreateContact from './CreateContact';
import Contact from './Contact';

export default class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
    };
  }

get reference() {
    return firebase.database().ref(`${this.props.uid}/user-contacts`);
  }

  componentDidMount() {
    this.reference.on('value', (snapshot) => {
      const contacts = snapshot.val();
      if (!contacts) { return this.setState({ contacts: [] }); }
      this.setState({
        contacts: Object.entries(contacts)
                     .map(([key, value]) => Object.assign({ key }, value)),
      });
    });
  }

  componentWillUnmount() {
    this.reference.off();
  }

  render() {
    const contacts = this.state.contacts.map((contact) => <Contact {...contact} reference={this.reference.child(contact.key)} />);

    return (
      <section className="ContactList">
        <h3>Contact List ({this.props.uid})</h3>
        <CreateContact reference={this.reference}/>
        {contacts}
      </section>
    );
  }
}
