import React, { Component } from 'react';
import firebase from '../firebase';

export default function ({contact, reference, handleClick}) {
  return (
    <div className='MiniContactCard' onClick={() => {handleClick()}} key={contact.key}>
      <ul>
        //Add image here
        <li>Name: {contact.contactName}</li>
        <li>Company: {contact.companyName}</li>
        <li>{contact.followup}</li>
      </ul>
      <button onClick={() => reference.remove()}>Delete</button>
    </div>
  );
}
