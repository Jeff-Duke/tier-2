import React, { Component } from 'react';
import firebase from '../firebase';
import store from '../data-store';

import SignIn from './SignIn';
import UserInfo from './UserInfo';
import ProfileHeader from './ProfileHeader';
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
        <div className="Application logged-in">
          <UserInfo user={user} />
          <button className="signOut" onClick={() => firebase.auth().signOut()}>Sign Out</button>
          <div className="ProfileHeader">
            <ProfileHeader user={user} />
          </div>
          <div className="CreateContact">
            <CreateContact />
          </div>
        </div>
      );
    }
    return (
      <div className="Application not-logged-in">
        <SignIn />
      </div>
    );
  }
}
