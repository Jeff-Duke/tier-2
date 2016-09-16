import React from 'react';
import firebase, { provider } from '../firebase';

export default function () {
  return (
    <section className="SignIn">
      <h1>ConnectR</h1>
      <button className="GoogleLogin" onClick={() => firebase.auth().signInWithPopup(provider)}></button>
    </section>
  );
}
