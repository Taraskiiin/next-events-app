import { useContext } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

import styles from '@/styles/components/UI/Notification.module.css';
import NotificationContext from '@/store/NotificationContext';

function Notification(props) {
	const notificationCtx = useContext(NotificationContext);

	const { title, message, status } = props;

	let statusClasses = '';

	if (status === 'success') {
		statusClasses = styles.success;
	}

	if (status === 'error') {
		statusClasses = styles.error;
	}

	if (status === 'pending') {
		statusClasses = styles.pending;
	}

	const activeClasses = `${styles.notification} ${statusClasses}`;

	return (
		<div className={activeClasses} onClick={notificationCtx.hideNotification}>
			{status === 'pending' ? (
				<ScaleLoader
					height={50}
					width={10}
					radius={8}
					color={'#fff'}
					aria-label='Loading Spinner'
					data-testid='loader'
				/>
			) : (
				<h2>{title}</h2>
			)}
			<p>{message}</p>
		</div>
	);
}

export default Notification;
