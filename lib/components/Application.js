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

  triggerSignOut() {
    firebase.auth().signOut();
    this.setState({ user: null });
  }

  render() {
    const { user } = this.state;
    if (user) {
      return (
        <div className="ApplicationLoggedIn" role="application">
          <UserInfo user={user} />
          <div className="SignOutButton">
            <button
              className="SignOut"
              onClick={() => this.triggerSignOut()}
              children="Sign Out"
            />
          </div>  
          <ContactList uid={user.uid} />
          <CreateContact />
        </div>
      );
    }
    return (
      <div className="ApplicationNotLoggedIn" role="link">
        <SignIn />
      </div>
    );
  }
}

module.exports = Application
