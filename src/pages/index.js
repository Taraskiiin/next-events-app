import EventsList from '@/components/events/EventsList';
import { getFeaturedEvents } from '../../dummy-data';

export default function Home() {
	const featuredEvents = getFeaturedEvents();
	return (
		<>
			<EventsList items={featuredEvents} />
		</>
	);
}
