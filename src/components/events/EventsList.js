import EventsItem from './EventsItem';
import styles from '@/styles/components/events/EventsList.module.css';

function EventsList({ items }) {
	return (
		<ul className={styles.list}>
			{items?.map((item) => (
				<EventsItem
					key={item?.id}
					id={item?.id}
					title={item.title}
					location={item.location}
					date={item.date}
					image={item.image}
				/>
			))}
		</ul>
	);
}

export default EventsList;
