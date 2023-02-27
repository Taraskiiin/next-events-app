import ScaleLoader from 'react-spinners/ScaleLoader';
import styles from '@/styles/components/UI/Spinner.module.css';

function Spinner() {
	return (
		<div className={styles.spinnerBox}>
			<ScaleLoader
				height={120}
				width={30}
				radius={8}
				color={'#03be9f'}
				aria-label='Loading Spinner'
				data-testid='loader'
			/>
		</div>
	);
}

export default Spinner;
