import React, { Component } from 'react';
import firebase from '../firebase';

export default function ({ name, reference }) {
  return (
    <article className="ContactCard">
      <h2>{name}</h2>
      <button onClick={() => reference.remove()} >
          Delete
        </button>
    </article>
  );
}
