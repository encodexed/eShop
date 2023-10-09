import { useState, useEffect, createContext, useContext } from "react";
import {
	getAllItems,
	updateFirestoreStock,
} from "../../../services/firestore-services";
import {
	checkStockOfAllItems,
	createUpdatedStoreDataObject,
} from "../../../services/data-services";
import { CartContext } from "../CartContextProvider/CartContextProvider";
export const StoreDataContext = createContext(null);

/** A NOTE ABOUT STORE DATA
 * Store data is fetched when visiting the site for the first time
 * It is not updated until the user attempts to buy something, or refreshes/revisits the page
 * This would not be ideal when there are multiple users, but this is only a project, not a live site
 * To fix this, I would make sure live updates are enabled
 * I made the project this way to reduce API requests being sent on a free tier
 */

const StoreDataContextProvider = ({ children }) => {
	const [storeData, setStoreData] = useState(null);
	const { emptyCart } = useContext(CartContext);

	useEffect(() => {
		const initialiseStoreData = async () => {
			try {
				const data = await getAllItems();
				setStoreData(data);
			} catch (e) {
				console.error(e.message);
			}
		};
		initialiseStoreData();
	}, []);

	const getStoreItemData = (id) => {
		return storeData.find((item) => item.id === id);
	};

	const checkoutOfStore = (cart) => {
		checkStockOfAllItems(cart, storeData);
		const newStoreData = createUpdatedStoreDataObject(cart, storeData);
		setStoreData(newStoreData.storeData);
		updateFirestoreStock(newStoreData.firestoreUpdates);
		emptyCart();
	};

	return (
		<StoreDataContext.Provider
			value={{ storeData, getStoreItemData, checkoutOfStore }}
		>
			{children}
		</StoreDataContext.Provider>
	);
};

export default StoreDataContextProvider;
