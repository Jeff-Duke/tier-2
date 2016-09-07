const firebase = require('./firebase');
// const validateInputFields = require('./validate-signin-fields');
const {
  $googleLogInButton,
  $signOutButton,
  $usernameField,
  $passwordField,
  $signInButton
} = require ('./_elements');

let currentUser;
const provider = new firebase.auth.GoogleAuthProvider();

//Google OAuth
$googleLogInButton.on('click', () => {
  firebase.auth().signInWithPopup(provider);
});

//Listen to make sure both fields are filled in
// $usernameField.on('keyup', validateInputFields);
// $passwordField.on('keyup', validateInputFields);


//Sign out of Google
$signOutButton.on('click', () => {
  firebase.auth().signOut().then(function() {
    console.log('You signed out!');
  }, function(error) {
    console.log(error);
  });
});

//OAuth state change
firebase.auth().onAuthStateChanged((user) => {
  currentUser = user;
  $googleLogInButton.toggle(!currentUser);
});
