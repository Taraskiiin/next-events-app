import { createContext, useState, useEffect } from 'react';

const NotificationContext = createContext({
	notification: null,
	showNotification: function (notification) {},
	hideNotification: function () {},
});

export function NotificationContextProvider(props) {
	const [activeNotification, setActiveNotification] = useState();

	function showNotificationHandler(notificationData) {
		setActiveNotification(notificationData);
	}
	function hideNotificationHandler() {
		setActiveNotification(null);
	}

	useEffect(() => {
		if (activeNotification && activeNotification.status !== 'pending') {
			const timer = setTimeout(() => {
				hideNotificationHandler();
			}, 2000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [activeNotification]);

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
