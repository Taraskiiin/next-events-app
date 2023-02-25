import { useRouter } from 'next/router';
import { getAllEvents } from 'dummy-data';
import EventsSearch from '@/components/events/EventsSearch';
import EventList from '@/components/events/EventsList';

function AllEventsPage() {
	const events = getAllEvents();
	const router = useRouter();

	function findEventsHandler(year, month) {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath);
	}
	return (
		<>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</>
	);
}

export default AllEventsPage;
