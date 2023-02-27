import { useRef } from 'react';

import styles from '@/styles/components/input/NewsletterRegistration.module.css';

function NewsletterRegistration() {
	const inputRef = useRef();

	function registrationHandler(event) {
		event.preventDefault();

		const input = inputRef?.current?.value;

		fetch('/api/newsletter', {
			method: 'POST',
			body: JSON.stringify({ email: input }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data.message));
	}

	return (
		<section className={styles.newsletter}>
			<h2>Sign up to stay updated!</h2>
			<form onSubmit={registrationHandler}>
				<div className={styles.control}>
					<input
						ref={inputRef}
						type='email'
						id='email'
						placeholder='Your email'
						aria-label='Your email'
					/>
					<button>Register</button>
				</div>
			</form>
		</section>
	);
}

export default NewsletterRegistration;
