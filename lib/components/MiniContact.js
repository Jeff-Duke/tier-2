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
      <div className='MiniContactCard' onClick={() => this.props.handleClick()} key={this.props.contact.key}>
      <img className="ProfilePlaceholder" src ={profilePhoto} alt='profile placeholder' />

        <article className="ContactCardInfo">
          <ul>
            <li>Name: <span>{this.props.contact.contactName}</span></li>
            <li>Company: <span>{this.props.contact.companyName}</span></li>
            <li><span className="NameSpan">{this.props.contact.followup}</span></li>
          </ul>

        </article>
      </div>
    );
  }
}

module.exports = MiniContact;
