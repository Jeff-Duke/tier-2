import React, { Component } from 'react';
import firebase from '../firebase';

import SignIn from './SignIn';
import UserInfo from './UserInfo';
import AddContact from './AddContact';

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
          <button id="sign-out" onClick={() => firebase.auth().signOut().then(function() { console.log('Signed-out'); }, function(error) { console.error(error); })}>Sign Out</button>
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
