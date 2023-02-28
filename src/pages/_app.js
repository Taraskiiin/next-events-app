import Layout from '@/components/layout/Layout';

import Notification from '@/components/UI/Notification';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
			<Notification title='test' message='this is a test.' start='pending' />
		</Layout>
	);
}
