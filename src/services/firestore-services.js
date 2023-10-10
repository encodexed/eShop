import { db } from "../../config/firestore";
import {
	collection,
	getDocs,
	doc,
	writeBatch,
	setDoc,
} from "firebase/firestore";
import { seedData } from "./seedData";

export const getAllItems = async () => {
	const collectionRef = collection(db, "stock"); // config file ref to the database, then name of collection on Firestore
	const snapshot = await getDocs(collectionRef);
	// Takes in a query/collection ref that returns a promise of a query snapshot
	// snapshot.docs.forEach((doc) => console.log(doc.id, doc.data()));
	// Should log a QuerySnapshot with your data plus metadata
	const documents = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
	// This will give us an array that is useful to us to be worked with
	return documents;
};

export const updateFirestoreStock = async (updates) => {
	// Create an empty transaction for your updates
	const batch = writeBatch(db);

	// Loop through your updates and add them to the transaction
	updates.forEach((item) => {
		const docRef = doc(db, "stock", item.id);
		batch.update(docRef, "stock.playstation", item.stock.playstation);
		batch.update(docRef, "stock.pc", item.stock.pc);
		batch.update(docRef, "stock.xbox", item.stock.xbox);
		batch.update(docRef, "stock.nSwitch", item.stock.nSwitch);
	});

	// Send it!
	await batch.commit();
};

export const printDB = () => {
	seedData.forEach((doc) => {
		console.log(doc);
	});
};

export const enterIntoDatabase = async () => {
	await setDoc(doc(db, "stock", "7"), {
		categories: ["Superhero", "Open World", "Action", "Singleplayer"],
		description:
			"In Marvel’s Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel’s New York. Web-swing through vibrant neighborhoods and defeat villains with epic takedowns.",
		developer: "Insomniac Games",
		discountFactor: 1,
		featured: false,
		imageLinks: [
			"https://images.pushsquare.com/39b50ce3f30ad/1280x720.jpg",
			"https://cdn.akamai.steamstatic.com/steam/apps/1817070/ss_ad14a7daa190cb150fbb070afc70bc64d66a5e2e.600x338.jpg",
			"https://cdn.akamai.steamstatic.com/steam/apps/1817070/ss_7c2b250a3dfcf7a48b61e6b911894be1d78be8ec.600x338.jpg",
		],
		price: 94.95,
		publisher: ["Playstation PC LLC"],
		rating: "Mature",
		reviewScore: 94,
		stock: {
			pc: 5,
			playstation: 10,
			nSwitch: -1,
			xbox: -1,
		},
		title: "Marvel's Spider-Man Remastered",
	});
};

export const resetDatabase = async () => {
	const batch = writeBatch(db);

	// get the current data
	const collectionRef = (db, "stock");
	const snapshot = await getDocs(collectionRef);
	const existingDataIDs = snapshot.docs.map((doc) => ({ id: doc.id }));
	console.log(existingDataIDs);

	// set batch to delete all current data
	// existingDataIDs.forEach((docID) => {
	// 	const docRef = doc(db, "stock", docID);
	// 	batch.delete(docRef);
	// });

	// set batch to add all data from file
	// seedData.forEach((ware) => {
	// 	const wareRef = doc(db, "stock", ware.id);
	// 	batch.set(wareRef, ware);
	// });

	await batch.commit();
};

// seed()
//   .then(() => console.log('Successfully seeded database'))
//   .catch((e) => console.log(Error: ${e.message}))
//   .finally(async () => await terminate(db));
