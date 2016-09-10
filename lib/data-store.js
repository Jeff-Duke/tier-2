const EventEmitter = require('events');
import React, { Component } from 'react';
import firebase from './firebase';

let contacts = [];

const store = new EventEmitter();

const storedContacts = localStorage.getItem('contacts');
if (storedContacts) { contacts = JSON.parse(storedContacts); }

store.all = () => contacts.concat([]);

store.create = (contact) => {
  contact.name = name;
  contact.id = Date.now();  //TODO: add firebase id
  contacts = contacts.concat(contact);
  store.emit('change', contacts);
};

store.on('change', (contacts) => {
  const reference  = firebase.database().ref();

  reference.push(contacts[contacts.length - 1]);
  // localStorage.setItem('contacts', JSON.stringify(contacts));
});

module.exports = store;
