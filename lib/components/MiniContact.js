import React, { Component } from 'react';
import FullContact from './Contact';
import firebase from '../firebase';
import md5 from 'md5';

class MiniContact extends Component {
  constructor(props) {
    super();
    this.state = {
    }

  }

  render() {
    let hashEmail = this.props.contact.primaryEmail.toLowerCase();
    let profilePhoto = 'https://www.gravatar.com/avatar/' + md5(hashEmail);
    return (
      <div className='MiniContactCard' onClick={() => this.props.handleClick()} key={this.props.contact.key} role="article">
        <img className="ProfilePhoto" src ={profilePhoto} alt='contact photo' />
        <article className="ContactCardInfo">
          <ul>
            <li>Name: <span role="listitem">{this.props.contact.contactName}</span></li>
            <li>Company: <span role="listitem">{this.props.contact.companyName}</span></li>
            <li><span className="NameSpan" role="listitem">{this.props.contact.followup}</span></li>
          </ul>
          <button className="ExpandContact" onClick={() => this.props.handleClick()}>More Info</button>
        </article>
      </div>
    );
  }
}

module.exports = MiniContact;
