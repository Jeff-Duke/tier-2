import React from 'react';
import { render } from 'react-dom';
import Application from './components/Application.js';

require ('./css/styles');

render(<Application />, document.getElementById('application'));
