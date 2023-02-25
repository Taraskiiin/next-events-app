import Link from 'next/link';
import styles from '@/styles/components/UI/Button.module.css';

function Button(props) {
	if (props.link) {
		return (
			<span className={styles.btn}>
				<Link href={props.link}>{props.children}</Link>
			</span>
		);
	}
	return (
		<button className={styles.btn} onClick={props.onClick}>
			{props.children}
		</button>
	);
}

export default Button;
