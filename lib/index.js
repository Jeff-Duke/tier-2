require ('./css/styles');
require ('./auth.js');
require ('./firebase.js');
// require ('./_elements.js');
require ('./validate-signin-fields.js');
require ('./contact');
require ('./contact-list');
require ('./render');

const contactList = require('./contact-list');

contactList.createNewContact();
