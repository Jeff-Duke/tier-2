const EventEmitter = require('events');

let contacts = [];

const store = new EventEmitter();

const storedContacts = localStorage.getItem('contacts');
if (storedContacts) { contacts = JSON.parse(storedContacts); }

store.all = () => contacts.concat([]);

store.create = (contact) => {
  contact.name = name;
  contact.id = Date.now();
  contacts = contacts.concat(contact);
  store.emit('change', contacts);
};

store.on('change', (contacts) => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
});

module.exports = store;
