function handler(req, res) {
	const eventId = req.query.eventId;
	if (req.method === 'POST') {
		const { email, name, text } = req.body;

		if (
			!email ||
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!text ||
			text.trim() === ''
		) {
			res.status(422).json({ message: 'not valid data!' });
			return;
		}

		const NewComment = {
			id: new Date().toISOString(),
			email,
			name,
			text,
		};
		console.log(NewComment);
		res.status(201).json({ message: 'pushed success' });
	}
	if (req.method === 'GET') {
		const mockList = [
			{
				id: 'c1',
				name: 'UserName',
				text: 'user text',
			},
			{
				id: 'c2',
				name: 'UserName(1)',
				text: 'user text(1)',
			},
		];

		res.status(200).json({ mockList });
	}
}

export default handler;
