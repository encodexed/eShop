import { useState, useEffect, createContext } from "react";
import { getAllItems } from "../../../services/fake-backend-services";
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

	return (
		<StoreDataContext.Provider value={{ storeData, getStoreItemData }}>
			{children}
		</StoreDataContext.Provider>
	);
};

export default StoreDataContextProvider;
