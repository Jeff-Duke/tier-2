import React, { Component } from 'react';
import firebase from '../firebase';

// export default function ({contact, reference, handleDeselect}) {
//   return (
//     <div key={contact.key} className='FullContactCard'>
//       <ul>
//         <li>Name: {contact.contactName}</li>
//         <li>Company: {contact.companyName}</li>
//         <li>Primary Phone: {contact.primaryPhone}</li>
//         <li>Secondary Phone:{contact.secondaryPhone}</li>
//         <li>Primary Email: {contact.primaryEmail}</li>
//         <li>Secondary Email: {contact.secondaryEmail}</li>
//         <li>Social Media: <a target='_blank' href={contact.primarySocial}>{contact.primarySocial}</a></li>
//         <li>Social Media: <a target='_blank' href={contact.secondarySocial}>{contact.secondarySocial}</a></li>
//         <li>{contact.followup}</li>
//         <li>Notes: {contact.notes}</li>
//       </ul>
//       <button onClick={() => reference.remove()}>Delete</button>
//       <button onClick={() => handleDeselect()}>Back</button>
//     </div>
//   );
// }

class FullContact extends Component {
  constructor(props) {
    super();
      this.state = {
        // selectedFullContact: false
      };
    }

  render() {
    return (
      <div key={this.props.contact.key} className='FullContactCard'>
        <ul>
          <li>Name: {this.props.contact.contactName}</li>
          <li>Company: {this.props.contact.companyName}</li>
          <li>Primary Phone: {this.props.contact.primaryPhone}</li>
          <li>Secondary Phone:{this.props.contact.secondaryPhone}</li>
          <li>Primary Email: {this.props.contact.primaryEmail}</li>
          <li>Secondary Email: {this.props.contact.secondaryEmail}</li>
          <li>Social Media: <a target='_blank' href={this.props.contact.primarySocial}>{this.props.contact.primarySocial}</a></li>
          <li>Social Media: <a target='_blank' href={this.props.contact.secondarySocial}>{this.props.contact.secondarySocial}</a></li>
          <li>{this.props.contact.followup}</li>
          <li>Notes: {this.props.contact.notes}</li>
        </ul>
        <button onClick={() => this.props.reference.remove()}>Delete</button>
        <button onClick={() => this.setState({ selectedFullContact: null })}>Back</button>
      </div>
    );
  }
}

module.exports = FullContact;
