import { getAllEvents, getEventById } from '@/helpers/apiUtils';
import Head from 'next/head';

import Spinner from '@/components/UI/Spinner';
import EventSummary from '@/components/eventsDetails/EventSummary';
import EventContent from '@/components/eventsDetails/EventContent';
import EventLogistics from '@/components/eventsDetails/EventLogistics';

function EventDetailPage(props) {
	const event = props.selectedEvent;

	if (!event) {
		return <Spinner />;
	}

	return (
		<>
			<Head>
				<title>{event?.title}</title>
				<meta name='description' content={event?.description} />
			</Head>
			<EventSummary title={event?.title} />
			<EventLogistics
				date={event?.date}
				address={event?.location}
				image={event?.image}
				imageAll={event?.title}
			/>
			<EventContent>
				<p>{event?.description}</p>
			</EventContent>
		</>
	);
}

export async function getStaticProps(context) {
	const eventId = context.params.eventId;
	const event = await getEventById(eventId);
	return {
		props: {
			selectedEvent: event,
		},
		revalidate: 60,
	};
}

export async function getStaticPaths() {
	const events = await getAllEvents();
	const paths = events.map((event) => ({ params: { eventId: event.id } }));

	return {
		paths: paths,
		fallback: 'blocking',
	};
}

export default EventDetailPage;
