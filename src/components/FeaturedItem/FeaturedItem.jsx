import styles from "./FeaturedItem.module.scss";
import FeaturedTag from "../FeaturedTag/FeaturedTag";
import Price from "../Price/Price";
import Platforms from "../Platforms/Platforms";

const FeaturedItem = ({ data }) => {
	console.log({ data });
	if (!data) {
		return <div>Loading...</div>;
	}

	const { title, description, imageLinks, price, discountFactor, stock } = data;
	return (
		<div className={styles.featured_item}>
			<div className={styles.featured_item__main_image__container}>
				<img
					className={styles.featured_item__main_image__content}
					src={imageLinks[0]}
					alt='Main image for game'
				/>
			</div>
			<div className={styles.featured_item__info_container}>
				<div className={styles.featured_item__info__content}>
					<FeaturedTag />
					<h2 className={styles.featured_item__info__content__title}>
						{title}
					</h2>
					<Platforms stock={stock} />
					<Price originalPrice={price} discountFactor={discountFactor} />
					<p className={styles.featured_item__info__content__body_text}>
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default FeaturedItem;
