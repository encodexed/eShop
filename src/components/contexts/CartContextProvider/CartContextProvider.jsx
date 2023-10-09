import { useState, createContext, useEffect } from "react";
import {
	consolidateCart,
	getCartItemCount,
	getCartTotalPrice,
} from "../../../services/basic-services";
export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartTotalPrice, setCartTotalPrice] = useState(0);
	const [cartItemCount, setCartItemCount] = useState(0);

	const addToCartState = (orderInfo) => {
		setCart((prevState) => {
			if (!prevState.length) {
				return [orderInfo];
			} else {
				return consolidateCart([...prevState, orderInfo]);
			}
		});
	};

	const emptyCart = () => {
		setCart([]);
	};

	useEffect(() => {
		setCartTotalPrice(getCartTotalPrice(cart));
		setCartItemCount(getCartItemCount(cart));
	}, [cart]);

	return (
		<CartContext.Provider
			value={{ cart, emptyCart, addToCartState, cartTotalPrice, cartItemCount }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
