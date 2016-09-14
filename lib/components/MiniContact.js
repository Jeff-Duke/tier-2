import React, { Component } from 'react';
import Contact from './Contact';
import firebase from '../firebase';

// export default function ({contact, reference, handleClick, state}) {
//   return (
//     <div className='MiniContactCard' 
//         onClick={() => this.setState({ selectedContact: contact })} 
//         key={contact.key}>
//       <ul>
//         <li>Name: {contact.contactName}</li>
//         <li>Company: {contact.companyName}</li>
//         <li>{contact.followup}</li>
//       </ul>
//       <button className="DeleteContact" onClick={() => reference.remove()}>Delete</button>
//     </div>
//   );
// }

class MiniContact extends Component {
  constructor(props) {
    super();
    this.state={
    isSelectedContact: false,
    }
  }

  render() {
    if (this.state.isSelectedContact){
        return (
          <Contact contact={this.props.contact}
                  reference={this.props.reference.child(this.props.contact.key)}
                  key={this.props.contact.key}
               />
        )
      }
    return (
      
      <div className='MiniContactCard' onClick={() => this.setState({ isSelectedContact: true })} key={this.props.contact.key}>
        <ul>
          <li>Name: {this.props.contact.contactName}</li>
          <li>Company: {this.props.contact.companyName}</li>
          <li>{this.props.contact.followup}</li>
        </ul>
        <button className="DeleteContact" onClick={() => this.props.reference.remove()}>Delete</button>
      </div>
    );
  }
}


module.exports = MiniContact;