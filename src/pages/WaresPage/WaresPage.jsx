import styles from "./WaresPage.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import FeaturedItems from "../../components/FeaturedItems/FeaturedItems";
import Wares from "../../components/Wares/Wares";

const WaresPage = () => {
	return (
		<div className={styles.wares_page}>
			<Navbar />
			<FeaturedItems />
			<Wares />
		</div>
	);
};

export default WaresPage;
