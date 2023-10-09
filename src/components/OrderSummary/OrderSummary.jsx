import styles from "./OrderSummary.module.scss";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContextProvider/CartContextProvider";
import { StoreDataContext } from "../contexts/StoreDataContextProvider/StoreDataContextProvider";
import { formatPrice } from "../../services/basic-services";
import DataSlice from "../DataSlice/DataSlice";
import Heading from "../Heading/Heading";

const OrderSummary = () => {
	const { cart, cartTotalPrice, cartItemCount } = useContext(CartContext);
	const { checkoutOfStore } = useContext(StoreDataContext);
	const shipping = 9 + cartItemCount;
	const shippingFee = formatPrice(shipping) + ".00";
	const subtotal = formatPrice(cartTotalPrice);
	const formattedPrice = formatPrice(cartTotalPrice + shipping);

	return (
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
					onClick={() => checkoutOfStore(cart)}
				>
					Submit Order
				</button>
			</div>
		</div>
	);
};

export default OrderSummary;
