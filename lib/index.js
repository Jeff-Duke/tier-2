// require ('./auth.js');
// require ('./firebase.js');
// require ('./_elements.js');
// require ('./validate-signin-fields.js');
// require ('./contact');
// require ('./contact-list');
// require ('./render');
//
// const contactList = require('./contact-list');
//
// contactList.createNewContact();

import React from 'react';
import { render } from 'react-dom';
import Application from './components/Application.js';

require ('./css/styles');

render(<Application />, document.getElementById('application'));
