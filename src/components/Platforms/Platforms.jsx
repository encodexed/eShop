import styles from "./Platforms.module.scss";

const Platforms = ({ stock }) => {
	let { pc, xbox, playstation, nSwitch } = stock;
	let newStrArray = [];

	if (pc > -1) {
		newStrArray.push("PC");
	}
	if (xbox > -1) {
		newStrArray.push("Xbox");
	}
	if (playstation > -1) {
		newStrArray.push("Playstation");
	}
	if (nSwitch > -1) {
		newStrArray.push("Switch");
	}

	const platforms = newStrArray.join(", ");

	return (
		<p className={styles.platforms}>
			<span className={styles.platforms__key}>Platforms: </span>
			<span className={styles.platforms__content}>{platforms}</span>
		</p>
	);
};

export default Platforms;
