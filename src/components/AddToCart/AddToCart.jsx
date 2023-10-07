import styles from "./AddToCart.module.scss";
import { useRef, useContext, useState } from "react";
import { CartContext } from "../contexts/CartContextProvider/CartContextProvider";
import { checkStock } from "../../services/fake-backend-services";
import { useParams } from "react-router-dom";

const AddToCart = () => {
	const { cart, addToCartState } = useContext(CartContext);
	const quantityRef = useRef(null);
	const platformRef = useRef(null);
	const { id } = useParams();
	const [status, setStatus] = useState(null);

	console.log({ cart });

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
		console.log({ orderInfo });

		// Check store data to make sure conditions are right
		const isOrderValidated = await checkStock(orderInfo);
		console.log({ isOrderValidated });

		if (isOrderValidated === "Added to Cart") {
			addToCartState(orderInfo);
		}

		setStatus(isOrderValidated);
	};

	return (
		<>
			<form className={styles.add_to_cart} onSubmit={onSubmit}>
				<div>
					<label htmlFor='quantity'>Quantity: </label>
					<input
						type='number'
						ref={quantityRef}
						name='quantity'
						id='quantity'
						required
					/>
					<select name='platform' ref={platformRef} id='platform'>
						<option value='' defaultValue disabled>
							Choose a Platform
						</option>
						<option value='playstation'>Playstation</option>
						<option value='pc'>PC</option>
						<option value='xbox'>Xbox</option>
						<option value='nSwitch'>Nintendo Switch</option>
					</select>
				</div>
				<button>Add to Cart</button>
			</form>
			{status && <p>{status}</p>}
		</>
	);
};

export default AddToCart;
