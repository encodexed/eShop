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

	const deleteFromCartState = (id) => {
		setCart((prevState) => {
			return prevState.filter((item) => item.id !== id);
		});
	};

	const adjustItemCountInCart = (id, platform, adjustmentType) => {
		const newCart = [...cart];
		const foundItem = newCart.find((item) => item.id === id);
		if (adjustmentType === "increment") {
			foundItem.platform[platform]++;
		} else {
			foundItem.platform[platform]--;
		}

		setCart(newCart);
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
			value={{
				cart,
				emptyCart,
				addToCartState,
				deleteFromCartState,
				adjustItemCountInCart,
				cartTotalPrice,
				cartItemCount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
