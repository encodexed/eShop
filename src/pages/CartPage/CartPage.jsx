import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../components/contexts/CartContextProvider/CartContextProvider";
import { consolidateCart } from "../../services/basic-services";
import Navbar from "../../components/Navbar/Navbar";
import Heading from "../../components/Heading/Heading";
import styles from "./CartPage.module.scss";

const CartPage = () => {
	const { cart, addToCartState } = useContext(CartContext);
	const [cartItemList, setCartItemList] = useState(null);

	useEffect(() => {
		setCartItemList(consolidateCart(cart));
	}, [cart]);

	return (
		<div className={styles.cart_page}>
			<Navbar />
			<main className={styles.cart_page__container}>
				<div className={styles.cart_page__content_wrapper}>
					<div className={styles.cart_page__content_wrapper__inner}>
						<Heading text='Cart' size={"60px"} />
					</div>
				</div>
			</main>
		</div>
	);
};

export default CartPage;
