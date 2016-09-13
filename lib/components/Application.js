import React, { Component } from 'react';
import firebase from '../firebase';

import SignIn from './SignIn';
import UserInfo from './UserInfo';
import ContactList from './ContactList';
import CreateContact from './CreateContact';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  render() {
    const { user } = this.state;
    if (user) {
      return (
        <div className="ApplicationLoggedIn">
          <UserInfo user={user} />
          <button className="signOut" onClick={() => firebase.auth().signOut()}>Sign Out</button>
          <ContactList uid={user.uid} />
          <CreateContact />
        </div>
      );
    }
    return (
      <div className="ApplicationNotLoggedIn">
        <SignIn />
      </div>
    );
  }
}
