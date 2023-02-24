import { useRouter } from 'next/router';
import { getEventById } from 'dummy-data';
import WarningBox from '@/components/UI/WarningBox';

function EventDetailPage() {
	const router = useRouter();

	const eventId = router.query.eventsId;
	const event = getEventById(eventId);

	if (!event) {
		return <WarningBox message='No event found!' />;
	}

	return (
		<div>
			<h1>Event Detail</h1>
		</div>
	);
}

export default EventDetailPage;
