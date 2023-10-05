import styles from "./FeaturedItem.module.scss";
import FeaturedTag from "../FeaturedTag/FeaturedTag";
import Price from "../Price/Price";
import Platforms from "../Platforms/Platforms";
import Categories from "../Categories/Categories";
import { NavLink } from "react-router-dom";
import { createSlug } from "../../services/basic-services";

const FeaturedItem = ({ data }) => {
	if (!data) {
		return <div>Loading...</div>;
	}

	const {
		title,
		categories,
		description,
		id,
		imageLinks,
		price,
		discountFactor,
		stock,
	} = data;

	const slug = createSlug(title);

	return (
		<NavLink to={`/wares/${id}/${slug}`} className={styles.featured_item}>
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
					<Categories categories={categories} />
					<Platforms stock={stock} />
					<Price
						originalPrice={price}
						discountFactor={discountFactor}
						marginTop='16'
					/>
					<p className={styles.featured_item__info__content__body_text}>
						{description}
					</p>
				</div>
			</div>
		</NavLink>
	);
};

export default FeaturedItem;
