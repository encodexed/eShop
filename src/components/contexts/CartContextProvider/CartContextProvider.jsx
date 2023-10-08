import { useState, createContext } from "react";
import { consolidateCart } from "../../../services/basic-services";
export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	// const [cartTotalPrice, setCartTotalPrice] = useState();

	const addToCartState = (orderInfo) => {
		setCart((prevState) => {
			if (!prevState) {
				return [orderInfo];
			} else {
				const newCart = consolidateCart([...prevState, orderInfo]);
				return newCart;
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
