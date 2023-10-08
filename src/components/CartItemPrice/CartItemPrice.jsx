import { formatPrice, getCartItemCount } from "../../services/basic-services";
import DataSlice from "../DataSlice/DataSlice";

const CartItemPrice = ({ orderData, price, discountFactor }) => {
	const totalItems = getCartItemCount([orderData]);
	const subtotal = price * totalItems;
	const discountPercent = `${100 - discountFactor * 100}%`;
	const totalPrice = (subtotal * discountFactor).toFixed(2).toString();
	const formattedPrice = formatPrice(price);
	const formattedSubtotal = formatPrice(subtotal);
	const formattedTotal = formatPrice(totalPrice);

	if (!price) {
		price = "Free";
	}

	return (
		<div>
			<DataSlice listing='Copies' value={totalItems} />
			<DataSlice listing='Price' value={formattedPrice} />
			<DataSlice listing='Subtotal' value={formattedSubtotal} />
			<DataSlice listing='Discount' value={discountPercent} />
			<DataSlice listing='TOTAL' value={formattedTotal} />
		</div>
	);
};

export default CartItemPrice;
