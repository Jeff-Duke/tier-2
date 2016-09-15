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
          <button
            className="SignOut"
            onClick={() => firebase.auth().signOut()}
            children="Sign Out"
            onClick={() => this.setState({ user: null })}
          />
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

module.exports = Application
