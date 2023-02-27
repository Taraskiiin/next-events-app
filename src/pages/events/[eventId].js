import { getEventById, getAllEvents } from '@/helpers/apiUtils';
import WarningBox from '@/components/UI/WarningBox';
import EventSummary from '@/components/enentsDetails/EventSummary';
import EventContent from '@/components/enentsDetails/EventContent';
import EventLogistics from '@/components/enentsDetails/EventLogistics';

function EventDetailPage(props) {
	const event = props.selectedEvent;

	if (!event) {
		return <WarningBox message='No event found!' />;
	}

	return (
		<>
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
	};
}

export async function getStaticPaths() {
	const events = await getAllEvents();
	const paths = events.map((event) => ({ params: { eventId: event.id } }));

	return {
		paths: paths,
		fallback: false,
	};
}

export default EventDetailPage;
