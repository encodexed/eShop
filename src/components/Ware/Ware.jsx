import styles from "./Ware.module.scss";
import Button from "../Button/Button";
import Price from "../Price/Price";

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
					<div className={styles.ware__text__more_info}>
						<div className={styles.ware__text__price}>
							<Price originalPrice={price} discountFactor={discountFactor} />
						</div>
						<div className={styles.ware__text__reviews}>{reviewScore}/100</div>
					</div>
				</div>
				<div className={styles.ware__text__container__right}>
					<Button route={`/wares/${id}/${slug}`} text='See more' />
				</div>
			</div>
		</article>
	);
};

export default Ware;
