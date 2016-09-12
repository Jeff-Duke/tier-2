import React, { Component } from 'react';
import firebase from '../firebase';

export default function ({contact, reference}) {
  return (
    <div key={contact.key}>
      <ul>
        //Add image here
        <li>Name: {contact.contactName}</li>
        <li>Company: {contact.companyName}</li>
        <li>Primary Phone: {contact.primaryPhone}</li>
        <li>Secondary Phone:{contact.secondaryPhone}</li>
        <li>Primary Email: {contact.primaryEmail}</li>
        <li>Secondary Email: {contact.secondaryEmail}</li>
        <li>Social Media: <a target='_blank' href={contact.primarySocial}>{contact.primarySocial}</a></li>
        <li>Social Media: <a target='_blank' href={contact.secondarySocial}>{contact.secondarySocial}</a></li>
        <li>{contact.followup}</li>
        <li>Notes: {contact.notes}</li>
      </ul>
      <button onClick={() => reference.remove()}>Delete</button>
    </div>
  );
}
