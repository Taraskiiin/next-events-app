import { useRouter } from 'next/router';
import { getFeaturedEvents } from '@/helpers/dummy-data';
import WarningBox from '@/components/UI/WarningBox';
import EventsList from '@/components/events/EventsList';
import ResultsTitle from '@/components/events/ResultsTitle';

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

	const date = new Date(filteredYear, filteredMonth - 1);

	return (
		<>
			<ResultsTitle date={date} />
			<EventsList items={filteredEvents} />
		</>
	);
}

export default FilteredEventPage;
