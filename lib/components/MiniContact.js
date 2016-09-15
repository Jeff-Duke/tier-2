import React, { Component } from 'react';
import FullContact from './Contact';
import firebase from '../firebase';

class MiniContact extends Component {
  constructor(props) {
    super();
  }

  render() {

    return (
      <div className='MiniContactCard' onClick={() => this.props.handleClick()} key={this.props.contact.key} role="article">
        <img className="ProfilePlaceholder" src='/img/profile-image-placeholder.svg' alt='profile placeholder' />
        <article className="ContactCardInfo">
          <ul>
            <li>Name: <span role="listitem">{this.props.contact.contactName}</span></li>
            <li>Company: <span role="listitem">{this.props.contact.companyName}</span></li>
            <li><span className="NameSpan" role="listitem">{this.props.contact.followup}</span></li>
          </ul>

        </article>
      </div>
    );
  }
}

module.exports = MiniContact;
