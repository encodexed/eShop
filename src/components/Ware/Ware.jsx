import styles from "./Ware.module.scss";
import Price from "../Price/Price";
import { NavLink } from "react-router-dom";
import ReviewScore from "../ReviewScore/ReviewScore";

const Ware = ({ data }) => {
	const { id, imageLinks, title, price, discountFactor, reviewScore } = data;

	const createSlug = (text) => {
		let newStr = text.replaceAll(" ", "_");
		newStr = newStr.replaceAll("'", "");
		newStr = newStr.replaceAll('"', "");
		return newStr;
	};
	const slug = createSlug(title);

	return (
		<article className={styles.ware__container}>
			<NavLink className={styles.ware__nav_link} to={`/wares/${id}/${slug}`}>
				<div className={styles.ware__images__container}>
					<div className={styles.ware__images__left}>
						<img
							className={styles.ware__images__img}
							src={imageLinks[0]}
							alt={`Cover art for ${title}`}
						/>
					</div>

					<div className={styles.ware__images__right}>
						<div>
							<img
								className={styles.ware__images__img}
								src={imageLinks[1]}
								alt={`Cover art for ${title}`}
							/>
						</div>
						<div>
							<img
								className={styles.ware__images__img}
								src={imageLinks[2]}
								alt={`Cover art for ${title}`}
							/>
						</div>
					</div>
				</div>
				<div className={styles.ware__text__container}>
					<div className={styles.ware__text__container__left}>
						<div className={styles.ware__text__title}>{title}</div>
					</div>
					<div className={styles.ware__text__container__middle}>
						<ReviewScore score={reviewScore} />
					</div>
					<div className={styles.ware__text__container__right}>
						<Price originalPrice={price} discountFactor={discountFactor} />
					</div>
				</div>
			</NavLink>
		</article>
	);
};

export default Ware;
