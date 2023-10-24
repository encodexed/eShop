import styles from "./OrderSummary.module.scss";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContextProvider/CartContextProvider";
import { StoreDataContext } from "../contexts/StoreDataContextProvider/StoreDataContextProvider";
import { formatPrice } from "../../services/basic-services";
import DataSlice from "../DataSlice/DataSlice";
import Heading from "../Heading/Heading";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
	const [error, setError] = useState(null);
	const { cart, cartTotalPrice, cartItemCount } = useContext(CartContext);
	const { checkoutOfStore } = useContext(StoreDataContext);
	const navigator = useNavigate();
	const shipping = 9 + cartItemCount;
	const shippingFee = formatPrice(shipping) + ".00";
	const subtotal = formatPrice(cartTotalPrice);
	const formattedPrice = formatPrice(cartTotalPrice + shipping);

	const submitOrderHandler = () => {
		try {
			checkoutOfStore(cart);
			setError(null);
			navigator("/success");
		} catch (e) {
			setError(e.message);
		}
	};

	return (
		<div className={styles.order_summary__container}>
			<div className={styles.order_summary}>
				<Heading text='Order Summary' />
				<div className={styles.order_summary__subtotal}>
					<DataSlice listing='Total Items' value={cartItemCount} />
					<DataSlice listing='Subtotal' value={subtotal} />
				</div>
				<div>
					<DataSlice listing='Shipping' value={shippingFee} />
					<DataSlice listing='TOTAL' value={formattedPrice} />
				</div>
				<div className={styles.order_summary__btn__container}>
					<button
						className={styles.order_summary__btn}
						onClick={submitOrderHandler}
					>
						Submit Order
					</button>
				</div>
			</div>
			{error && <div className={styles.order_summary__error}>{error}</div>}
		</div>
	);
};

export default OrderSummary;
