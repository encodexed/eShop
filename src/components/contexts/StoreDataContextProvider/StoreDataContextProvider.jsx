import { useState, useEffect, createContext } from "react";
import { getAllItems } from "../../../services/firestore-services";
export const StoreDataContext = createContext(null);

const StoreDataContextProvider = ({ children }) => {
	const [storeData, setStoreData] = useState(null);

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
		// checkStock();
		// updateStockDatabase();
		// updateWebsiteStock();
		// emptyCart();
		console.log(cart);
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
