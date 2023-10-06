import ReviewScore from "../ReviewScore/ReviewScore";
import DataSlice from "../DataSlice/DataSlice";
import styles from "./GameData.module.scss";
import { getPlatforms } from "../../services/basic-services";

const GameData = ({ data }) => {
	const { reviewScore, categories, stock, developer, publisher, rating } = data;

	const categoriesStr = categories.join(", ");
	const platforms = getPlatforms(stock);

	return (
		<ul className={styles.game_data}>
			<li>
				<ReviewScore score={reviewScore} />
			</li>
			<li>
				<DataSlice listing='Categories' value={categoriesStr} />
			</li>
			<li>
				<DataSlice listing='Platforms' value={platforms} />
			</li>
			<li>
				<DataSlice listing='Developer' value={developer} />
			</li>
			<li>
				<DataSlice listing='Publisher' value={publisher} />
			</li>
			<li>
				<DataSlice listing='Rating' value={rating} />
			</li>
		</ul>
	);
};

export default GameData;
