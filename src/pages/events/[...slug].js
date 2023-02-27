import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getFeaturedEvents } from '@/helpers/apiUtils';
import WarningBox from '@/components/UI/WarningBox';
import EventsList from '@/components/events/EventsList';
import ResultsTitle from '@/components/events/ResultsTitle';
import Spinner from '@/components/UI/Spinner';

function FilteredEventPage() {
	const [loadedEvents, setLoadedEvents] = useState();
	const router = useRouter();
	const filterData = router.query.slug;

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				'https://next-event-5b69b-default-rtdb.europe-west1.firebasedatabase.app/events.json'
			);
			const data = await response.json();
			const events = [];

			for (const key in data) {
				events.push({
					id: key,
					...data[key],
				});
			}
			setLoadedEvents(events);
		}
		fetchData();
	}, []);

	if (!loadedEvents) {
		return <Spinner />;
	}

	const filteredYear = +filterData[0];
	const filteredMonth = +filterData[1];

	if (
		isNaN(filteredYear) ||
		isNaN(filteredMonth || filteredMonth < 1 || filteredMonth > 12 || error)
	) {
		return <WarningBox message='Invalid filter. Please adjust your values!' />;
	}

	const filteredEvents = loadedEvents.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === filteredYear &&
			eventDate.getMonth() === filteredMonth - 1
		);
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

// export async function getServerSideProps(context) {
// 	const { params } = context;

// 	const filterData = params.slug;

// 	const filteredYear = +filterData[0];
// 	const filteredMonth = +filterData[1];

// 	if (
// 		isNaN(filteredYear) ||
// 		isNaN(filteredMonth || filteredMonth < 1 || filteredMonth > 12)
// 	) {
// 		return {
// 			props: { hasError: true },
// 		};
// 	}

// 	const filteredEvents = await getFeaturedEvents({
// 		year: filteredYear,
// 		month: filteredMonth,
// 	});

// 	return {
// 		props: {
// 			filteredEvents: filteredEvents,
// 			date: {
// 				year: filteredYear,
// 				month: filteredMonth,
// 			},
// 		},
// 	};
// }

export default FilteredEventPage;
