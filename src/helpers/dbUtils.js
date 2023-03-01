import { MongoClient } from 'mongodb';

const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.1j6bugp.mongodb.net/${process.env.DB_PROJECT}?retryWrites=true&w=majority`;

export async function connectDatabase() {
	const client = await MongoClient.connect(connectionString);
	return client;
}

export async function insertDocument(client, collection, document) {
	const db = client.db();
	const result = await db.collection(collection).insertOne(document);
	return result;
}

export async function getAllDocuments(client, collection, sort) {
	const db = client.db();
	const documents = await db.collection(collection).find().sort(sort).toArray();
	return documents;
}
