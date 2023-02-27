import Head from 'next/head';

import NewsletterRegistration from '@/components/input/NewsletterRegistration';
import EventsList from '@/components/events/EventsList';
import { getFeaturedEvents } from '@/helpers/apiUtils';

export default function Home(props) {
	return (
		<>
			<Head>
				<title>nextJS-events</title>
				<meta
					name='description'
					content='Find a lot of events that allow you to evolve...'
				/>
			</Head>
			<NewsletterRegistration />
			<EventsList items={props.events} />
		</>
	);
}

export async function getStaticProps(context) {
	const featuredEvents = await getFeaturedEvents();
	return {
		props: {
			events: featuredEvents,
		},
		revalidate: 1800,
	};
}
