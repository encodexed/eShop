import styles from "./LandingPage.module.scss";
import FeaturedItems from "../../components/FeaturedItems/FeaturedItems";
const LandingPage = () => {
	return (
		<div className={styles.landing_page}>
			<FeaturedItems />
			<div className={styles.landing_page__text}>
				<h1>Welcome</h1>
			</div>
		</div>
	);
};

export default LandingPage;
