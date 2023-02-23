import Link from 'next/link';
import Button from '@/components/UI/Button';
import DateIcon from '@/components/icons/DateIcon';
import AddressIcon from '@/components/icons/AddressIcon';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';

import styles from '@/styles/components/events/EventsItem.module.css';

function EventsItem({ title, image, date, location, id }) {
	const readableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const formattedAddress = location.replace(', ', '\n');
	const exploredLink = `/events/${id}`;

	return (
		<li className={styles.item}>
			<img src={'/' + image} alt={title} />
			<div className={styles.content}>
				<div className={styles.summary}>
					<h2>{title}</h2>
				</div>
				<div className={styles.date}>
					<DateIcon />
					<time>{readableDate}</time>
				</div>
				<div className={styles.address}>
					<AddressIcon />
					<address>{formattedAddress}</address>
				</div>
			</div>
			<div className={styles.actions}>
				<Button link={exploredLink}>
					<span>Explore Event</span>
					<span className={styles.icon}>
						<ArrowRightIcon />
					</span>
				</Button>
			</div>
		</li>
	);
}

export default EventsItem;
