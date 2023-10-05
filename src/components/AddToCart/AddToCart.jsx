import styles from "./AddToCart.module.scss";
import Price from "../Price/Price";
import Stock from "../Stock/Stock";

const AddToCart = ({ price, discountFactor, stock }) => {
	return (
		<div className={styles.add_to_cart}>
			<div className={styles.add_to_cart__container}>
				<Price originalPrice={price} discountFactor={discountFactor} />
				<Stock stock={stock} />
			</div>
		</div>
	);
};

export default AddToCart;
