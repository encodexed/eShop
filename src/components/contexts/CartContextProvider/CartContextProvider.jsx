import { useState, useEffect, createContext } from "react";
export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState(null);

	useEffect(() => {
		// todo
	}, []);

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
