import React, { Component } from 'react';
import firebase from '../firebase';

export default function ({ name, company, reference }) {
  return (
    <article className="ContactCard">
      <h2>{name}</h2>
      <h2>{company}</h2>
    </article>
  );
}
