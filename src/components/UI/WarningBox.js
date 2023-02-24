import Image from 'next/image';
import Button from '@/components/UI/Button';
import styles from '@/styles/components/UI/WarningBox.module.css';

function WarningBox({ message }) {
	return (
		<div className={styles.mainBlock}>
			<p>{message}</p>
			<Image
				src={'/images/warning.png'}
				alt='Warning image'
				width={500}
				height={500}
			/>
			<Button link='/'>
				<span>Return to Home page</span>
			</Button>
		</div>
	);
}

export default WarningBox;
