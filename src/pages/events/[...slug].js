import { useRouter } from 'next/router';
import { getFeaturedEvents } from 'dummy-data';
import WarningBox from '@/components/UI/WarningBox';
import EventsList from '@/components/events/EventsList';

function FilteredEventPage() {
	const router = useRouter();
	const filterData = router.query.slug;

	if (!filterData) {
		return <p style={{ textAlign: 'center' }}>Loading...</p>;
	}

	const filteredYear = +filterData[0];
	const filteredMonth = +filterData[1];

	if (
		isNaN(filteredYear) ||
		isNaN(filteredMonth || filteredMonth < 1 || filteredMonth > 12)
	) {
		return <WarningBox message='Invalid filter. Please adjust your values!' />;
	}

	const filteredEvents = getFeaturedEvents({
		year: filteredYear,
		month: filteredMonth,
	});

	if (!filteredEvents || filteredEvents.length === 0) {
		return <WarningBox message='No events found for the chosen filter' />;
	}

	return (
		<>
			<EventsList items={filteredEvents} />
		</>
	);
}
export default FilteredEventPage;
