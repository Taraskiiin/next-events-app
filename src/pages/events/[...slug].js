import { getFeaturedEvents } from 'dummy-data';

function FilteredEventPage() {
	const filteredEvents = getFeaturedEvents({
		year: numYear,
		month: numMonth,
	});
	return (
		<div>
			<h1>Filtered Events</h1>
		</div>
	);
}
export default FilteredEventPage;
