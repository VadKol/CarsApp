import React from 'react';
import { NavLink } from 'react-router-dom';

export const Contacts: React.FC = () => (
	<section className="fullHeight hero is-medium is-primary has-background-white has-text-black">
		<div className="hero-body">
			<p className="title is-1 has-text-black-bis mb-6">
				Hello!
				My name is Vadym Kolomiiets!)
			</p>


			<br />
			<a
				href="https://www.linkedin.com/in/vadym-kolomiiets-ua/"
				target="_blank"
				rel="noreferrer"
				className="button is-large is-link"
			>
				Linkedin
			</a>
		</div>
	</section>
);
