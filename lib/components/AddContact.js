import React, { Component } from 'react';
import firebase from '../firebase';

export default class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  AddContact(e) {
    e.preventDefault();

    const { reference } = this.props;
    const { name } = this.state;

    reference.push({ name, isCompleted: false });
    this.setState({ name: '' });
  }

  render() {
    return (
      <form className="AddContact" onSubmit={this.AddContact.bind(this)}>
        <input
          placeholder="Name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <input type="submit" value="Add Contact" />
      </form>
    );
  }
}
