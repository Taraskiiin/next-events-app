import Link from 'next/link';
import styles from '@/styles/components/UI/Button.module.css';

function Button(props) {
	return (
		<span className={styles.btn}>
			<Link href={props.link}>{props.children}</Link>
		</span>
	);
}

export default Button;
