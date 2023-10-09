import { db } from "../../config/firestore";
import { collection, getDocs, doc, writeBatch } from "firebase/firestore";

export const getAllItems = async () => {
	const collectionRef = collection(db, "stock"); // config file ref to the database, then name of collection on Firestore
	const snapshot = await getDocs(collectionRef);
	// Takes in a query/collection ref that returns a promise of a query snapshot
	// snapshot.docs.forEach((doc) => console.log(doc.id, doc.data()));
	// Should log a QuerySnapshot with your data plus metadata
	const documents = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
	console.log(documents);
	// This will give us an array that is useful to us to be worked with
	return documents;
};

export const updateFirestoreStock = async (updates) => {
	console.log("updating firestore with these new items", updates);
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
