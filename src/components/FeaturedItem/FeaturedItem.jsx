import styles from "./FeaturedItem.module.scss";
import FeaturedTag from "../FeaturedTag/FeaturedTag";
import Price from "../Price/Price";

const FeaturedItem = () => {
	return (
		<div className={styles.featured_item}>
			<div className={styles.featured_item__main_image__container}>
				<img
					className={styles.featured_item__main_image__content}
					src='https://ea6kwt57nbj.exactdn.com/wp-content/uploads/2023/07/Starfield-Featured-Ecran-Partage.jpg'
					alt='Starfield main image'
				/>
			</div>
			<div className={styles.featured_item__info_container}>
				<div className={styles.featured_item__info__content}>
					<FeaturedTag />
					<h2 className={styles.featured_item__info__content__title}>
						Starfield
					</h2>
					<p className={styles.featured_item__info__content__subtitle}>
						PC, Xbox, Playstation
					</p>
					<Price />
					<p className={styles.featured_item__info__content__body_text}>
						Starfield is the first new universe in 25 years from Bethesda Game
						Studios, the award-winning creators of The Elder Scrolls V: Skyrim
						and Fallout 4.
					</p>
				</div>
			</div>
		</div>
	);
};

export default FeaturedItem;
