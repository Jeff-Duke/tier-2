import React from 'react';
import firebase from '../firebase';

export default function({ user }) {
  return (
    <section className="UserInfo">
      <img
        className="ProfileImage"
        src={user.photoURL}
        alt={`${user.displayName} Photograph`}
        />
      <div className="UserInfoDisplayName"> {user.displayName}</div>
      {/* <div className="UserInfo--email">{user.email}</div> */}
    </section>
  )
}
