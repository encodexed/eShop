import { useState, createContext } from "react";
export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCartState = (orderInfo) => {
		setCart((prevState) => {
			if (!prevState) {
				return [orderInfo];
			} else {
				return [...prevState, orderInfo];
			}
		});
	};

	return (
		<CartContext.Provider value={{ cart, addToCartState }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
