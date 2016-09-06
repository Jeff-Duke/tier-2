const firebase = require('./firebase');
const {
  $googleLogInButton
} = require ('./elements.js');

let currentUser;
const provider = new firebase.auth.GoogleAuthProvider();

$googleLogInButton.on('click', () => {
  firebase.auth().signInWithPopup(provider);
});

firebase.auth().onAuthStateChanged((user) => {
  currentUser = user;
  $signInButton.toggle(!currentUser);
});
