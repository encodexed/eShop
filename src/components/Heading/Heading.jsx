import styles from "./Heading.module.scss";

const Heading = ({ text, size = "24px", truncation = 40 }) => {
	if (text.length > truncation) {
		text = text.substring(0, truncation) + "...";
	}

	return (
		<h2 style={{ fontSize: `${size}` }} className={styles.heading}>
			{text}
		</h2>
	);
};

export default Heading;
