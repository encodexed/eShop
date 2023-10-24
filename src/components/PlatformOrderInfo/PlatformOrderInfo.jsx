import styles from "./PlatformOrderInfo.module.scss";
import { useContext, useEffect, useState } from "react";
import { StoreDataContext } from "../contexts/StoreDataContextProvider/StoreDataContextProvider";
import { getAvailablePlatforms } from "../../services/basic-services";
import CopiesModifier from "../CopiesModifier/CopiesModifier";

const PlatformOrderInfo = ({ orderData }) => {
	const { getStoreItemData } = useContext(StoreDataContext);
	const [availablePlatforms, setAvailablePlatforms] = useState(null);

	useEffect(() => {
		if (!orderData) {
			return;
		}

		const data = getStoreItemData(orderData.id);
		setAvailablePlatforms(getAvailablePlatforms(data.stock));
	}, [orderData, getStoreItemData]);

	return (
		<div className={styles.platform_order_info}>
			{!orderData && <p>Loading...</p>}
			{orderData &&
				availablePlatforms &&
				availablePlatforms.map((platform, index) => {
					if (platform) {
						return (
							<CopiesModifier
								key={`pcm${index}`}
								itemId={orderData.id}
								platformDataName={platform[0]}
								name={platform[1]}
								value={orderData.platform[platform[0]]}
							/>
						);
					}
				})}
		</div>
	);
};

export default PlatformOrderInfo;
