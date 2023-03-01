import styles from '@/styles/components/input/CommentList.module.css';

function CommentList({ items }) {
	return (
		<ul className={styles.comments}>
			{items &&
				items.length !== 0 &&
				items.map((item) => (
					<li key={item._id}>
						<p>{item.text}</p>
						<div>
							By <address>{item.name}</address>
						</div>
					</li>
				))}
		</ul>
	);
}

export default CommentList;
