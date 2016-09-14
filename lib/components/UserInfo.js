import React from 'react';
import firebase from '../firebase';

export default function({ user }) {
  return (
    <section className="UserInfo">
      <div className="UserInfoDisplayName"> {user.displayName}
      </div>
    <div>
      <img
        className="ProfileImage"
        src={user.photoURL}
        alt={`${user.displayName} Photograph`}
        />
    </div>
    </section>
  )
}
