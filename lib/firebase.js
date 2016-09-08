const firebase = require('firebase');

const config = {
    apiKey: 'AIzaSyCKTFQVoOzOJNQGM50cPd4lQin2g7jbct0',
    authDomain: 'tier-2.firebaseapp.com',
    databaseURL: 'https://tier-2.firebaseio.com',
    storageBucket: 'tier-2.appspot.com',
  };

firebase.initializeApp(config);

export default firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
