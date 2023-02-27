import Image from 'next/image';

import AddressIcon from '@/components/icons/AddressIcon';
import DateIcon from '@/components/icons/DateIcon';
import LogisticsItem from './LogisticsItem';

import styles from '@/styles/components/enentsDetails/EventLogistics.module.css';

function EventLogistics({ date, address, image, imageAlt }) {
	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const addressText = address?.replace(', ', '\n');

	return (
		<section className={styles.logistics}>
			<div className={styles.image}>
				<Image src={`/${image}`} alt={imageAlt} width={400} height={400} />
			</div>
			<ul className={styles.list}>
				<LogisticsItem icon={DateIcon}>
					<time>{humanReadableDate}</time>
				</LogisticsItem>
				<LogisticsItem icon={AddressIcon}>
					<address>{addressText}</address>
				</LogisticsItem>
			</ul>
		</section>
	);
}

export default EventLogistics;
