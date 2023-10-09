import styles from "./CopiesModifier.module.scss";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContextProvider/CartContextProvider";
import CartModifierButton from "../CartModifierButton/CartModifierButton";

const CopiesModifier = ({ itemId, name, platformDataName, value }) => {
	const { adjustItemCountInCart } = useContext(CartContext);

	const decrementHandler = () => {
		adjustItemCountInCart(itemId, platformDataName, "decrement");
	};

	const incrementHandler = () => {
		adjustItemCountInCart(itemId, platformDataName, "increment");
	};

	return (
		<div className={styles.copies_mod}>
			<div>{name}:</div>
			<div className={styles.copies_mod__btns}>
				<CartModifierButton onClick={decrementHandler} functionType='-' />
				<div className={styles.copies_mod__value}>{value}</div>
				<CartModifierButton onClick={incrementHandler} functionType='+' />
			</div>
		</div>
	);
};

export default CopiesModifier;
