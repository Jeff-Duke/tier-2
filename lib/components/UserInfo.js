import React from 'react';
import firebase from '../firebase';

export default function({ user }) {
  return (
    <section className="UserInfo">
      <div className="UserInfoDisplayName" role="complementary"> {user.displayName}</div>
    <div role="complementary">
      <img
        className="ProfileImage"
        src={user.photoURL}
        alt={`${user.displayName} Photograph`}
        />
    </div>
    </section>
  )
}
