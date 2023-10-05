import styles from "./Price.module.scss";

const Price = ({ originalPrice, discountFactor }) => {
	const displayDiscount = discountFactor !== 1;
	const discountNum = Number.parseFloat(originalPrice * discountFactor)
		.toFixed(2)
		.toString();
	const discountAsPercentage = `${Math.floor((1 - discountFactor) * 100)}%`;

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
				<span className={styles.price__original_price}>${originalPrice}</span>
				<span className={styles.price__discount_price}>
					${discountNum} (-{discountAsPercentage})
				</span>
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
