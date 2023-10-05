import styles from "./Navbar.module.scss";
import logo from "../../assets/icon.png";
import { NavLink } from "react-router-dom";
import Cart from "../../assets/cart.svg";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__logo}>
				<NavLink className={styles.navbar__logo__link} to='/wares/'>
					<img src={logo} alt='Website logo' />
					<h4 className={styles.navbar__brand_text}>The Mysterious Stranger</h4>
				</NavLink>
			</div>
			<div className={styles.navbar__links}>
				<NavLink className={styles.navbar__link} to='/cart'>
					Cart
					<img className={styles.cart} src={Cart} alt='Cart icon' />
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
