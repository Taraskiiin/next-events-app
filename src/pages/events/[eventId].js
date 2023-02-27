import { useRouter } from 'next/router';

import { getEventById } from '@/helpers/dummy-data';
import WarningBox from '@/components/UI/WarningBox';
import EventSummary from '@/components/enentsDetails/EventSummary';
import EventContent from '@/components/enentsDetails/EventContent';
import EventLogistics from '@/components/enentsDetails/EventLogistics';

function EventDetailPage() {
	const router = useRouter();

	const eventId = router?.query?.eventId;
	const event = getEventById(eventId);

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

export default EventDetailPage;
