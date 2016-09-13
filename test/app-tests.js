var expect = require('chai').expect;
const React = require('react');
const Application = require('../lib/components/Application');
const UserInfo = require('../lib/components/UserInfo');
import { shallow, mount, render } from 'enzyme';
require('locus');

describe('app renders the user info',function(){
  it('should render the application',function(){
    const wrapper = shallow(<Application />)

    expect(wrapper.contains(<UserInfo user={user} />)).to.be.true
  })
});
