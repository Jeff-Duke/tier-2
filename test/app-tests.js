var expect = require('chai').expect;
const React = require('react');
const Application = require('../lib/components/Application');
const SignIn = require('../lib/components/SignIn');
const MiniContact = require('../lib/components/MiniContact');
const Contact = require('../lib/components/Contact');
const CreateContact = require('../lib/components/CreateContact');
const ContactList = require('../lib/components/ContactList');

import { shallow, mount, render } from 'enzyme';
require('locus');

describe('Application',function(){
  it('should have a default state of null', function() {
    const wrapper = shallow(<Application />);
    expect(wrapper.state().user).to.equal(null);
  });

  it('should have a title and button', function() {
    const wrapper = render(<Application />);
    expect(wrapper.find('h1')).to.have.length(1);
    expect(wrapper.find('button')).to.have.length(1);
    expect(wrapper.text()).to.contain('ConnectR');
  });
});
