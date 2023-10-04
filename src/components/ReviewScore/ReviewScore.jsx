import { getQuality } from "../../services/basic-services";
import styles from "./ReviewScore.module.scss";

const ReviewScore = ({ score }) => {
	/*
	 * Legendary Loot 95-100 orange red
	 * Epic Loot 85-94 purple
	 * Rare Loot 70-84 blue
	 * Uncommon Loot 55-69 green
	 * Common Loot 45-54 grey
	 * Low Quality Loot 30-44 dark grey
	 * Junk 0-29 brown
	 */

	const qualityIndicator = getQuality(score);
	const reviewReadOut = `${qualityIndicator.quality} (${score}%)`;

	return (
		<div className={styles[qualityIndicator.cssClass]}>{reviewReadOut}</div>
	);
};

export default ReviewScore;
