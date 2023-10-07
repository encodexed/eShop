import styles from "./CartItem.module.scss";
import { useContext, useEffect, useState } from "react";
import { StoreDataContext } from "../contexts/StoreDataContextProvider/StoreDataContextProvider";
import DataSlice from "../DataSlice/DataSlice";
import PlatformOrderInfo from "../PlatformOrderInfo/PlatformOrderInfo";

const CartItem = ({ orderData }) => {
	const [fullItemDetails, setFullItemDetails] = useState(null);
	const { getStoreItemData } = useContext(StoreDataContext);

	useEffect(() => {
		setFullItemDetails(getStoreItemData(orderData.id));
	}, [orderData.id, getStoreItemData, fullItemDetails]);

	if (!fullItemDetails) {
		return <p>Loading...</p>;
	}

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
				<h6 className={styles.cart_item__ware_details__title}>
					{fullItemDetails.title}
				</h6>
				<DataSlice listing='Developer' value={fullItemDetails.developer} />
				<DataSlice listing='Publisher' value={publisherStr} />
			</div>
			<div className={styles.cart_item__platform_data__container}>
				<PlatformOrderInfo
					orderData={orderData.platform}
					price={fullItemDetails.price}
					discountFactor={fullItemDetails.discountFactor}
				/>
			</div>
			<div className={styles.cart_item__total_price__container}>Blah</div>
		</div>
	);
};

export default CartItem;
