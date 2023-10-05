import { NavLink } from "react-router-dom";
import styles from "./PageNotFoundPage.module.scss";

const PageNotFoundPage = () => {
	return (
		<div className={styles.page_not_found}>
			<p className={styles.message}>
				Error 404 - You really hecked up this time, didn&apos;t ya?
			</p>
			<NavLink className={styles.link} to='/'>
				Back Home
			</NavLink>
		</div>
	);
};

export default PageNotFoundPage;
