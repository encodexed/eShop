import styles from "./Ware.module.scss";
import Price from "../Price/Price";
import { NavLink } from "react-router-dom";
import ReviewScore from "../ReviewScore/ReviewScore";
import Heading from "../Heading/Heading";
import { createSlug } from "../../services/basic-services";

const Ware = ({ data }) => {
	const { id, imageLinks, title, price, discountFactor, reviewScore } = data;
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
					<div className={styles.ware__text__container__top}>
						<Heading text={title} />
						<Price originalPrice={price} discountFactor={discountFactor} />
					</div>
					<ReviewScore score={reviewScore} />
				</div>
			</NavLink>
		</article>
	);
};

export default Ware;
