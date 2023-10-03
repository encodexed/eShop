import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss";

const Button = ({ route, text }) => {
	return (
		<button className={styles.button}>
			<NavLink className={styles.button__link} to={route}>
				{text}
			</NavLink>
		</button>
	);
};

export default Button;
