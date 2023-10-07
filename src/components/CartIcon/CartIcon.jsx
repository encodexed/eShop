import { NavLink } from "react-router-dom";
import styles from "./CartIcon.module.scss";
import Cart from "../../assets/cart.svg";
import { CartContext } from "../contexts/CartContextProvider/CartContextProvider";
import { useContext, useEffect, useState } from "react";
import { consolidateCartItems } from "../../services/basic-services";

const CartIcon = () => {
	const { cart } = useContext(CartContext);
	const [cartItemCount, setCartItemCount] = useState(null);

	useEffect(() => {
		setCartItemCount(consolidateCartItems(cart));
	}, [cart]);

	let cartBadgeStyles = styles.cart__badge;
	if (cartItemCount === 0) {
		cartBadgeStyles += ` ${styles.hidden}`;
	}

	return (
		<NavLink className={styles.cart__container} to='/cart'>
			<div className={cartBadgeStyles}>
				<span>{cartItemCount}</span>
			</div>
			<span className={styles.cart__container__text}>Cart</span>
			<img className={styles.cart__icon} src={Cart} alt='Cart icon' />
		</NavLink>
	);
};

export default CartIcon;
