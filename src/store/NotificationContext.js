import { createContext, useState } from 'react';

const NotificationContext = createContext({
	notification: null,
	showNotification: function (notification) {},
	hideNotification: function () {},
});

export function NotificationContextProvider(props) {
	const [activeNotification, setActiveNotification] = useState();

	function showNotificationHandler(notificationData) {
		setActiveNotification(notificationData);
		// {
		// title: notificationData.title,
		// message: notificationData.message,
		// status: notificationData.status,
		// }
	}
	function hideNotificationHandler() {
		setActiveNotification(null);
	}

	const context = {
		notification: activeNotification,
		showNotification: showNotificationHandler,
		hideNotification: hideNotificationHandler,
	};

	return (
		<NotificationContext.Provider value={context}>
			{props.children}
		</NotificationContext.Provider>
	);
}

export default NotificationContext;
