import Layout from '@/components/layout/Layout';
import { NotificationContextProvider } from '@/store/NotificationContext';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<NotificationContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</NotificationContextProvider>
	);
}
