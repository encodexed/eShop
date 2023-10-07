import styles from "./DataSlice.module.scss";

const DataSlice = ({ listing, value }) => {
	return (
		<div>
			<span className={styles.data_slice__listing}>{listing}: </span>
			<span className={styles.data_slice__value}>{value}</span>
		</div>
	);
};

export default DataSlice;
