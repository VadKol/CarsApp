import React from 'react';
import { NavigationLink } from '../NavigationLink';

export const Navigation = () => (
  <nav className="navbar is-dark" aria-label="main navigation">
    <div className="navbar-start">
      <NavigationLink to="/Cars" title="Cars" />

      <NavigationLink to="/Contacts" title="Contacts" />
    </div>
  </nav>
);
