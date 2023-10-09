import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss";

const Button = ({ route, text }) => {
	return (
		<NavLink className={styles.button__link} to={route}>
			<button className={styles.button}>{text}</button>
		</NavLink>
	);
};

export default Button;
