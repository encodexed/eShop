import { useState, useEffect, createContext, useContext } from "react";
import { getAllItems } from "../../../services/firestore-services";
import {
	checkStockOfAllItems,
	createUpdatedStoreDataObject,
} from "../../../services/data-services";
import { CartContext } from "../CartContextProvider/CartContextProvider";
export const StoreDataContext = createContext(null);

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
		try {
			checkStockOfAllItems(cart, storeData);
		} catch (e) {
			console.error(e.message);
			return;
		}

		const newStoreData = createUpdatedStoreDataObject(cart, storeData);
		setStoreData(newStoreData);
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
