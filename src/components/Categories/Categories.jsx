import styles from "./Categories.module.scss";

const Categories = ({ categories }) => {
	const categoriesStr = categories.join(", ");
	return (
		<p className={styles.categories}>
			<span className={styles.categories__key}>Categories: </span>
			<span className={styles.categories__content}>{categoriesStr}</span>
		</p>
	);
};

export default Categories;
