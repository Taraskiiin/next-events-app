import EventsList from '@/components/events/EventsList';
import { getFeaturedEvents } from '@/helpers/apiUtils';

export default function Home(props) {
	return (
		<>
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
	};
}
