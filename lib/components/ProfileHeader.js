import React from 'react';
import firebase from '../firebase';

export default function({ user }) {
  return (
    <section className="ProfileHeader">
      <img
        className="ProfileImage"
        src={user.photoURL}
        alt={`${user.displayName} Photograph`}
        />
      <p className="UserInfo-displayName"> {user.displayName}</p>
      <input className="CompanyName" type="text" placeholder="Company" />
    </section>
  )
}
