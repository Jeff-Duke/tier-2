import React, { Component } from 'react';
import firebase from '../firebase';

export default function ({contact, reference}) {
  return (
    <div key={contact.key}>
      <ul>
        <li>{contact.contactName}</li>
        <li>{contact.companyName}</li>
        <li>{contact.primaryPhone}</li>
        <li>{contact.secondaryPhone}</li>
        <li>{contact.primaryEmail}</li>
        <li>{contact.secondaryEmail}</li>
        <li><a target='_blank' href={contact.primarySocial}>{contact.primarySocial}</a></li>
        <li><a target='_blank' href={contact.secondarySocial}>{contact.secondarySocial}</a></li>
        <li>{contact.followup}</li>
        <li>{contact.notes}</li>
      </ul>
      <button onClick={() => reference.remove()}>Delete</button>
    </div>
  );
}
