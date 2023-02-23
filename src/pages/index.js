import EventsList from '@/components/events/EventsList';
import { getFeaturedEvents } from '../../dummy-data';

export default function Home() {
	const featuredEvents = getFeaturedEvents();
	return (
		<div>
			<EventsList items={featuredEvents} />
		</div>
	);
}
