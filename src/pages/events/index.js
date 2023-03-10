import { useRouter } from 'next/router';
import Head from 'next/head';

import { getAllEvents } from '@/helpers/apiUtils';
import EventsSearch from '@/components/events/EventsSearch';
import EventList from '@/components/events/EventsList';

function AllEventsPage({ events }) {
	const router = useRouter();

	function findEventsHandler(year, month) {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath);
	}
	return (
		<>
			<Head>
				<title>all-events</title>
			</Head>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</>
	);
}

export async function getStaticProps() {
	const events = await getAllEvents();

	return {
		props: {
			events: events,
		},
		revalidate: 60,
	};
}

export default AllEventsPage;
