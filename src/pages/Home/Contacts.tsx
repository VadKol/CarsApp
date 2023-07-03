import React from 'react';

export const Contacts: React.FC = () => (
	<section className="fullHeight hero is-medium is-primary has-background-white has-text-black">
		<div className="hero-body">
			<p className="title is-1 has-text-black-bis mb-6">
				Hello!
				My name is Vadym Kolomiiets!)
			</p>

			<div className='is-flex'>
				<div className='mr-5'>
					<a
						href="https://github.com/VadKol/CarsApp"
						target="_blank"
						rel="noreferrer"
						className="button is-large is-link"
					>
						Repo
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
