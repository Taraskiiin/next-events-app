import { useRef, useContext } from 'react';

import NotificationContext from '@/store/NotificationContext';

import styles from '@/styles/components/input/NewsletterRegistration.module.css';

function NewsletterRegistration() {
	const inputRef = useRef();
	const notificationCtx = useContext(NotificationContext);

	function registrationHandler(event) {
		event.preventDefault();

		const input = inputRef?.current?.value;
		notificationCtx.showNotification({
			title: 'signing up...',
			message: 'Registering for newsletter.',
			status: 'pending',
		});

		fetch('/api/newsletter', {
			method: 'POST',
			body: JSON.stringify({ email: input }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}

				return response.json.then((data) => {
					throw new Error(data.message || 'something went not cool');
				});
			})
			.then(() => {
				notificationCtx.showNotification({
					title: 'success!',
					message: 'Registered!',
					status: 'success',
				});
			})
			.catch((error) => {
				notificationCtx.showNotification({
					title: 'error!',
					message: error.message || 'something went not cool',
					status: 'error',
				});
			});
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
