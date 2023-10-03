import WaresList from "../WaresList/WaresList";
import styles from "./Wares.module.scss";

const Wares = () => {
	return (
		<main className={styles.wares}>
			<h1 className={styles.wares__heading}>All Wares</h1>
			{/* <SearchBar />
      <Filters /> */}
			<WaresList />
		</main>
	);
};

export default Wares;
