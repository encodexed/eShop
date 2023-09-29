import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContextProvider/DarkModeContextProvider";
import styles from "./BackgroundWrapper.module.scss";

const BackgroundWrapper = ({ children }) => {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div className={darkMode ? styles.dark : styles.light}>{children}</div>
	);
};

export default BackgroundWrapper;
