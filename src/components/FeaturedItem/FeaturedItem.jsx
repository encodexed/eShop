import styles from "./FeaturedItem.module.scss";
import FeaturedTag from "../FeaturedTag/FeaturedTag";
import Price from "../Price/Price";
import { NavLink } from "react-router-dom";
import { createSlug, getPlatforms } from "../../services/basic-services";
import DataSlice from "../DataSlice/DataSlice";

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
	const platforms = getPlatforms(stock);
	const categoriesStr = categories.join(", ");

	return (
		<NavLink to={`/wares/${id}/${slug}`} className={styles.featured_item}>
			<div className={styles.featured_item__content_wrapper}>
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
						<div>
							<DataSlice listing='Categories' value={categoriesStr} />
						</div>
						<div>
							<DataSlice listing='Platforms' value={platforms} />
						</div>
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
			</div>
		</NavLink>
	);
};

export default FeaturedItem;
