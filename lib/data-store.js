const EventEmitter = require('events');
import React, { Component } from 'react';
import firebase from './firebase';
import UserInfo from './'

let contacts = [];

const store = new EventEmitter();

store.all = () => contacts.concat([]);

store.create = (contact) => {
  contact.name = name;
  contact.id = Date.now();  //TODO: add firebase id
  contacts = contacts.concat(contact);
  store.emit('change', contacts);
};

store.retrieve = () => {
  const reference = firebase.database().ref(`${firebase.auth().currentUser.uid}/contact-list`);
    reference.on('value', (snapshot) => { 
    const contactList = snapshot.val();
    debugger;
    console.log(contactList.text);
    });
} 

store.on('change', (contacts) => {
  const reference = firebase.database().ref(`${firebase.auth().currentUser.uid}/contact-list`);
  reference.push(contacts[contacts.length - 1]);
  store.retrieve();
});

module.exports = store;
