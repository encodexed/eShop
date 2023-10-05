import styles from "./Price.module.scss";

const Price = ({ originalPrice, discountFactor }) => {
	const displayDiscount = discountFactor !== 1;
	const discountNum = Number.parseFloat(originalPrice * discountFactor)
		.toFixed(2)
		.toString();

	// Free game:
	if (originalPrice === 0 || discountFactor === 0) {
		return (
			<div className={styles.price__container}>
				<span className={styles.price__free}>Free Game!</span>
			</div>
		);
	}

	// Discounted game:
	if (displayDiscount) {
		return (
			<div className={styles.price__container}>
				<span className={styles.price__discount_price}>${discountNum}</span>
				<span className={styles.price__original_price}>${originalPrice}</span>
			</div>
		);
	}

	// Regularly-priced game:
	if (!displayDiscount) {
		return (
			<div className={styles.price__container}>
				<span className={styles.price__regular_price}>${originalPrice}</span>
			</div>
		);
	}
};

export default Price;
