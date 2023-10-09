import styles from "./CartModifierButton.module.scss";

const CartModifierButton = ({ onClick, functionType }) => {
	if (functionType === "-") {
		return (
			<button className={styles.cart_btn_decrement} onClick={onClick}>
				-
			</button>
		);
	}

	return (
		<button className={styles.cart_btn_increment} onClick={onClick}>
			+
		</button>
	);
};

export default CartModifierButton;
