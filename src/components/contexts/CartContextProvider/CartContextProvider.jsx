import { useState, createContext, useEffect } from "react";
import {
	consolidateCart,
	getCartTotalPrice,
} from "../../../services/basic-services";
export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartTotalPrice, setCartTotalPrice] = useState(0);

	const addToCartState = (orderInfo) => {
		setCart((prevState) => {
			if (!prevState.length) {
				return [orderInfo];
			} else {
				return consolidateCart([...prevState, orderInfo]);
			}
		});
	};

	useEffect(() => {
		const totalPrice = getCartTotalPrice(cart);
		setCartTotalPrice(totalPrice);
	}, [cart]);

	return (
		<CartContext.Provider value={{ cart, addToCartState, cartTotalPrice }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
