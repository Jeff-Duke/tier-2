import React from 'react';
import firebase, { provider } from '../firebase';

export default function () {
  return (
    <section className="SignIn">
    <h1>ConnectR</h1>
      <button className="googleLogin" onClick={() => firebase.auth().signInWithPopup(provider)}></button>
      <button id="sign-out" onClick={() => firebase.auth().signOut().then(function() { console.log('Signed-out'); }, function(error) { console.error(error); })}>Sign Out</button>
    </section>
  );
}


// <section className="SignIn">
// <img class="logo" src="/img/connect-logo.svg" alt="brand logo" />
// <form class="login-fields">
// <input id="username" type="text" name="username" placeholder="Username">
// <input id="password" type="password" name="password" maxlength="8" placeholder="Password">
// <input id="sign-in" type="button" name="sign in" value="sign-in"></button>
// // <input id="google-login" type="button" name="facebook login"></button>
// </form>
// </section>

// //OAuth state change
// firebase.auth().onAuthStateChanged((user) => {
//   currentUser = user;
//   $googleLogInButton.toggle(!currentUser);
// });
