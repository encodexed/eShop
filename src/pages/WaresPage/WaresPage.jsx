import styles from "./WaresPage.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import FeaturedItems from "../../components/FeaturedItems/FeaturedItems";

const WaresPage = () => {
	return (
		<div className={styles.wares_page}>
			<Navbar />
			<FeaturedItems />
		</div>
	);
};

export default WaresPage;
