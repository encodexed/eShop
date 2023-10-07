import styles from "./AddToCart.module.scss";
import { useRef, useContext, useState } from "react";
import { CartContext } from "../contexts/CartContextProvider/CartContextProvider";
import { checkStock } from "../../services/fake-backend-services";
import { useParams } from "react-router-dom";

const AddToCart = () => {
	const { addToCartState } = useContext(CartContext);
	const quantityRef = useRef("1");
	const platformRef = useRef(null);
	const { id } = useParams();
	const [status, setStatus] = useState(null);

	const onSubmit = async (e) => {
		e.preventDefault();
		// Create order data
		const platform = platformRef.current.value;
		const quantity = parseInt(quantityRef.current.value);
		const orderInfo = {
			id,
			platform: {
				pc: 0,
				playstation: 0,
				xbox: 0,
				nSwitch: 0,
			},
		};
		orderInfo.platform[platform] = quantity;

		// Check store data to make sure conditions are right
		const isOrderValidated = await checkStock(orderInfo);
		if (isOrderValidated === "Added to Cart!") {
			addToCartState(orderInfo);
		}

		setStatus(isOrderValidated);
	};

	let statusClasses = styles.add_to_cart__status;
	if (status === "Added to Cart!") {
		statusClasses += ` ${styles.add_to_cart__status_okay}`;
	} else {
		statusClasses += ` ${styles.add_to_cart__status_error}`;
	}

	return (
		<>
			<form className={styles.add_to_cart} onSubmit={onSubmit}>
				<div className={styles.add_to_cart__quantity}>
					<label htmlFor='quantity'>Quantity: </label>
					<input
						type='number'
						ref={quantityRef}
						name='quantity'
						id='quantity'
						required
						min='1'
					/>
				</div>
				<div className={styles.add_to_cart__platform}>
					<label htmlFor='platform'>Platform: </label>
					<select name='platform' ref={platformRef} id='platform'>
						<option value='' defaultValue disabled>
							Choose a Platform
						</option>
						<option value='playstation'>Playstation</option>
						<option value='pc'>PC</option>
						<option value='xbox'>Xbox</option>
						<option value='nSwitch'>Switch</option>
					</select>
				</div>
				<button className={styles.add_to_cart__btn}>Add to Cart</button>
				{status && <p className={statusClasses}>{status}</p>}
			</form>
		</>
	);
};

export default AddToCart;
