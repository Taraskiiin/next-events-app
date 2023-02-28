import { useContext } from 'react';

import NotificationContext from '@/store/NotificationContext';
import Header from './Header';
import Notification from '@/components/UI/Notification';

function Layout(props) {
	const notificationCtx = useContext(NotificationContext);
	const activeNotification = notificationCtx.notification;

	return (
		<>
			<Header />
			<main>{props.children}</main>
			{activeNotification && (
				<Notification
					title={activeNotification.title}
					message={activeNotification.message}
					status={activeNotification.status}
				/>
			)}
		</>
	);
}

export default Layout;
