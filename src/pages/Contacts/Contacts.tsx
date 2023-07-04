import React from 'react';

export const Contacts: React.FC = () => (
  <section className="fullHeight hero is-medium is-primary has-background-white has-text-black">
    <div className="hero-body">
      <p className="title is-1 has-text-black-bis mb-6">
        Hello! My name is Vadym Kolomiiets!)
      </p>

      <p className="title is-5 has-text-black-bis">
        I developed application with a list of cars and provides a convenient
        way to manage this list.
        <br />
        The app is designed to display, edit, delete, and add cars.
        <br />
        It uses a table to represent the list of cars and provides the ability
        to search for cars using a search form.
      </p>

      <div className="is-flex">
        <div className="mr-5">
          <a
            href="https://github.com/VadKol/CarsApp"
            target="_blank"
            rel="noreferrer"
            className="button is-large is-link"
          >
            Repo
          </a>
        </div>

        <div className="mr-5">
          <a
            href="https://t.me/vadymkol"
            target="_blank"
            rel="noreferrer"
            className="button is-large is-link"
          >
            Telegram
          </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/vadym-kolomiiets-ua/"
            target="_blank"
            rel="noreferrer"
            className="button is-large is-link"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  </section>
);
