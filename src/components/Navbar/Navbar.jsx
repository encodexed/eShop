import styles from "./Navbar.module.scss";
import logo from "../../assets/icon.png";
import { NavLink } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__content_wrapper}>
				<div className={styles.navbar__logo}>
					<NavLink className={styles.navbar__logo__link} to='/wares/'>
						<img src={logo} alt='Website logo' />
						<h4 className={styles.navbar__brand_text}>
							The Mysterious Stranger
						</h4>
					</NavLink>
				</div>
				<div className={styles.navbar__links}>
					<CartIcon />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
