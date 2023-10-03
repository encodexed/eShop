import styles from "./Price.module.scss";

const Price = ({ originalPrice, discountFactor }) => {
	const discountNum =
		Number.parseFloat(originalPrice * discountFactor)
			.toFixed(1)
			.toString() + "0";

	const discountAsPercentage = `${Math.floor((1 - discountFactor) * 100)}%`;

	return (
		<div className={styles.price__container}>
			<span className={styles.price__original_price}>${originalPrice}</span>
			<span className={styles.price__discount_price}>${discountNum}</span>
			<span className={styles.price__discount_percentage}>
				{discountAsPercentage}
			</span>
		</div>
	);
};

export default Price;
