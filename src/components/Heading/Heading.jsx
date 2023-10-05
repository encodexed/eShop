import styles from "./Heading.module.scss";

const Heading = ({ text, size = "36px", truncation = 28 }) => {
	if (text.length > truncation) {
		text = text.substring(0, truncation) + "...";
	}

	return (
		<h2 className={styles.heading} style={{ fontSize: { size } }}>
			{text}
		</h2>
	);
};

export default Heading;
