import React from 'react';
import firebase from '../firebase';

export default function({ user }) {
  return (
    <section className="UserInfo">
      <img
        src={user.photoURL}
        alt={`${user.displayName} Photograph`}
        />
      <article className="UserInfo--displayName"> {user.displayName}</article>
    </section>
  )
}
