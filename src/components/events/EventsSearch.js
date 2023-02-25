import { useRef } from 'react';
import Button from '@/components/UI/Button';
import styles from '@/styles/components/events/EventsSearch.module.css';

const year = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

function EventsSearch(props) {
	const yearInputRef = useRef();
	const monthInputRef = useRef();

	function submitHandler(event) {
		event.preventDefault();

		const selectedYear = yearInputRef?.current?.value;
		const selectedMonth = monthInputRef?.current?.value;

		props.onSearch(selectedYear, selectedMonth);
	}

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<div className={styles.controls}>
				<div className={styles.control}>
					<label htmlFor='year'>Year</label>
					<select id='year' ref={yearInputRef}>
						<option value='2021'>2021</option>
						<option value='2022'>2022</option>
						<option value='2023'>2023</option>
					</select>
				</div>
				<div className={styles.control}>
					<label htmlFor='month'>Month</label>
					<select id='month' ref={monthInputRef}>
						{year.map((month, index) => (
							<option value={index + 1} key={month}>
								{month}
							</option>
						))}
					</select>
				</div>
				<Button>Find Events</Button>
			</div>
		</form>
	);
}

export default EventsSearch;
