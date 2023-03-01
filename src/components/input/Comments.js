import { useState, useEffect, useContext } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import NotificationContext from '@/store/NotificationContext';
import CommentList from './CommentList';
import NewComment from './NewComment';

import styles from '@/styles/components/input/Comments.module.css';

function Comments(props) {
	const { eventId } = props;

	const notificationCtx = useContext(NotificationContext);

	const [showComments, setShowComments] = useState(false);
	const [comments, setComments] = useState([]);
	const [isFetchingComments, setIsFetchingComments] = useState(false);

	useEffect(() => {
		if (showComments) {
			setIsFetchingComments(true);
			fetch('/api/comments/' + eventId).then((response) =>
				response.json().then((data) => {
					setComments(data.comments);
					setIsFetchingComments(false);
				})
			);
		}
	}, [showComments]);

	function toggleCommentsHandler() {
		setShowComments((prevStatus) => !prevStatus);
	}

	function addCommentHandler(commentData) {
		notificationCtx.showNotification({
			title: 'signing comment...',
			message: 'your comment is currently being stored into a database.',
			status: 'pending',
		});
		fetch('/api/comments/' + eventId, {
			method: 'POST',
			body: JSON.stringify(commentData),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				return response.json.then((data) => {
					throw new Error(data.message || 'something went not cool');
				});
			})
			.then((data) => {
				notificationCtx.showNotification({
					title: 'success!',
					message: 'comment was pushed',
					status: 'success',
				});
			})
			.catch((error) => {
				notificationCtx.showNotification({
					title: 'error!',
					message: error.message || 'something went not cool',
					status: 'error',
				});
			});
	}

	return (
		<section className={styles.comments}>
			<button onClick={toggleCommentsHandler}>
				{showComments ? 'Hide' : 'Show'} Comments
			</button>
			{showComments && <NewComment onAddComment={addCommentHandler} />}
			{showComments && !isFetchingComments && <CommentList items={comments} />}
			{showComments && isFetchingComments && (
				<ScaleLoader
					height={50}
					width={10}
					radius={8}
					color={'#03be9f'}
					aria-label='Loading Spinner'
					data-testid='loader'
				/>
			)}
		</section>
	);
}

export default Comments;
