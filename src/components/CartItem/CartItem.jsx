import styles from "./CartItem.module.scss";
import { useContext, useEffect, useState } from "react";
import { StoreDataContext } from "../contexts/StoreDataContextProvider/StoreDataContextProvider";
import { CartContext } from "../contexts/CartContextProvider/CartContextProvider";
import DataSlice from "../DataSlice/DataSlice";
import PlatformOrderInfo from "../PlatformOrderInfo/PlatformOrderInfo";
import CartItemPrice from "../CartItemPrice/CartItemPrice";
import CartModifierButton from "../CartModifierButton/CartModifierButton";

const CartItem = ({ orderData }) => {
	const [fullItemDetails, setFullItemDetails] = useState(null);
	const { getStoreItemData } = useContext(StoreDataContext);
	const { deleteFromCartState } = useContext(CartContext);

	useEffect(() => {
		setFullItemDetails(getStoreItemData(orderData.id));
	}, [orderData.id, getStoreItemData, fullItemDetails]);

	if (!fullItemDetails) {
		return <p>Loading...</p>;
	}

	const removeItem = () => {
		deleteFromCartState(orderData.id);
	};

	const publisherStr = fullItemDetails.publisher.join(", ");

	return (
		<div className={styles.cart_item}>
			<div className={styles.cart_item__thumbnail__container}>
				<img
					className={styles.cart_item__thumbnail__image}
					src={fullItemDetails.imageLinks[0]}
					alt={`Thumbnail of ${fullItemDetails.title}`}
				/>
			</div>
			<div className={styles.cart_item__ware_details__container}>
				<div className={styles.cart_item__ware_details__title__container}>
					<CartModifierButton onClick={removeItem} functionType='-' />
					<h6 className={styles.cart_item__ware_details__title}>
						{fullItemDetails.title}
					</h6>
				</div>
				<DataSlice listing='Developer' value={fullItemDetails.developer} />
				<DataSlice listing='Publisher' value={publisherStr} />
			</div>
			<div className={styles.cart_item__platform_data__container}>
				<h6 className={styles.cart_item__ware_details__title}>Copies</h6>
				<PlatformOrderInfo orderData={orderData} />
			</div>
			<div className={styles.cart_item__total_price__container}>
				<h6 className={styles.cart_item__ware_details__title}>Summary</h6>
				<CartItemPrice
					orderData={orderData}
					price={fullItemDetails.price}
					discountFactor={fullItemDetails.discountFactor}
				/>
			</div>
		</div>
	);
};

export default CartItem;
