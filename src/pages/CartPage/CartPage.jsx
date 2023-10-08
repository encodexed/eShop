import { useContext } from "react";
import { CartContext } from "../../components/contexts/CartContextProvider/CartContextProvider";
import Navbar from "../../components/Navbar/Navbar";
import Heading from "../../components/Heading/Heading";
import styles from "./CartPage.module.scss";
import CartItem from "../../components/CartItem/CartItem";

const CartPage = () => {
	const { cart } = useContext(CartContext);

	if (!cart) {
		return <p>Loading...</p>;
	}

	return (
		<div className={styles.cart_page}>
			<Navbar />
			<main className={styles.cart_page__container}>
				<div className={styles.cart_page__content_wrapper}>
					<div className={styles.cart_page__content_wrapper__inner}>
						<Heading text='Cart' size={"60px"} />
						<div className={styles.cart_page__item_list}>
							{cart &&
								cart.map((item) => {
									return <CartItem key={item.id} orderData={item} />;
								})}
							{!cart.length && <p>Your cart is empty.</p>}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default CartPage;
