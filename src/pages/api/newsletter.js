import { connectDatabase, insertDocument } from '@/helpers/dbUtils';

async function handler(req, res) {
	if (req.method === 'POST') {
		const email = req.body.email;

		if (!email || !email.includes('@')) {
			res.status(422).json({ message: 'invalid email address' });
			return;
		}

		let client;

		try {
			client = await connectDatabase();
		} catch (error) {
			res.status(500).json({ message: 'failed connecting to DB' });
			return;
		}

		try {
			await insertDocument(client, 'newsletter', { email: email });
			client.close();
		} catch (error) {
			res.status(500).json({ message: 'inserting data failed' });
			return;
		}

		res.status(201).json({ message: 'signed up!' });
	}
}

export default handler;
