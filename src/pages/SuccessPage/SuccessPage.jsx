import { NavLink } from "react-router-dom";
import styles from "./SuccessPage.module.scss";

const SuccessPage = () => {
	return (
		<div className={styles.page_not_found}>
			<h1 className={styles.heading}>Success!</h1>
			<p className={styles.message}>
				An email has been sent to you with details about your payment options.
			</p>
			<NavLink className={styles.link} to='/'>
				Back Home
			</NavLink>
		</div>
	);
};

export default SuccessPage;
