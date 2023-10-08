import styles from "./Info.module.scss";
import Stock from "../Stock/Stock";
import AddToCart from "../AddToCart/AddToCart";
import Heading from "../Heading/Heading";
import GameData from "../GameData/GameData";

const Info = ({ data }) => {
	const { description, stock } = data;

	return (
		<div className={styles.info}>
			<div className={styles.info__container__top}>
				<p className={styles.info__description}>{description}</p>
			</div>
			<div className={styles.info__container__bottom}>
				<div className={styles.info__game_info}>
					<Heading text='Game Information' />
					<GameData data={data} />
				</div>
				<div className={styles.info__remaining_stock}>
					<Heading text='Remaining Stock' />
					<Stock stock={stock} />
				</div>
				<div className={styles.info__add_to_cart}>
					<Heading text='Add To Your Cart' />
					<AddToCart stock={stock} />
				</div>
			</div>
		</div>
	);
};

export default Info;
