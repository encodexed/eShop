import styles from "./Price.module.scss";

const Price = () => {
	const discountNum =
		Number.parseFloat(119.95 * 0.85)
			.toFixed(1)
			.toString() + "0";

	return (
		<div className={styles.price__container}>
			<span className={styles.price__original_price}>$119.95</span>
			<span className={styles.price__discount_price}>${discountNum}</span>
		</div>
	);
};

export default Price;
