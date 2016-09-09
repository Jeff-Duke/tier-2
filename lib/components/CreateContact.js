import React from 'react';
import firebase from '../firebase';
import store from '../data-store';

class CreateContact extends React.Component {
  constructor() {
    super();
    this.state = {
      contactName: '',
    };
  }

  updateProperties(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  createContact(e) {
    e.preventDefault();
    store.create(this.state);
    this.setState({
      contactName: '',
    });
  }

  render() {
    return (
    <section className="AddContact">
      <input className="NewContactName"
        name="contactName"
        type="text"
        placeholder="Name"
        value={this.state.contactName}
        onChange={(e) => this.updateProperties(e)}

         />
      <button className="NewContactButton"
        onClick={(e) => this.createContact(e)}>
        Add Contact</button>
    </section>
    )
  }
}

module.exports = CreateContact;
