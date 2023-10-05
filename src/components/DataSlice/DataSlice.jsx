import styles from "./DataSlice.module.scss";

const DataSlice = ({ listing, value }) => {
	return (
		<>
			<span className={styles.data_slice__listing}>{listing}: </span>
			<span className={styles.data_slice__value}>{value}</span>
		</>
	);
};

export default DataSlice;
