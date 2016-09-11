import React, { Component } from 'react';
import firebase from '../firebase';

export default class CreateContact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  createContact(e) {
    e.preventDefault();

    const { reference } = this.props;
    const { name } = this.state;

    reference.push({ name });
    this.setState({
      name: '',
    });
  }

  render() {
    return (
    <form className="CreateContact" onSubmit = {this.createContact.bind(this)}>
      <input
        placeholder="First & Last Name"
        value={this.state.name}
        onChange={(e) => this.setState({ name: e.target.value })}
         />
      <input type="submit" value="Create Contact" />
    </form>
  );
  }
}
