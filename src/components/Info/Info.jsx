import styles from "./Info.module.scss";
import DataSlice from "../DataSlice/DataSlice";
import ReviewScore from "../ReviewScore/ReviewScore";
import { getPlatforms } from "../../services/basic-services";

const Info = ({ data }) => {
	const {
		categories,
		description,
		developer,
		publisher,
		rating,
		reviewScore,
		stock,
	} = data;

	const platforms = getPlatforms(stock);
	const categoriesStr = categories.join(", ");

	return (
		<div className={styles.info}>
			<div className={styles.info__container__left}>
				<p className={styles.info__description}>{description}</p>
			</div>
			<div className={styles.info__container__right}>
				<div className={styles.info__info_1}>
					<ul className={styles.info__list}>
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
				</div>
			</div>
		</div>
	);
};

export default Info;
