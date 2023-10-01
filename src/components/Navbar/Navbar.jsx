import styles from "./Navbar.module.scss";
import logo from "../../assets/icon.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__logo}>
				<img src={logo} alt='Website logo' />
			</div>
			<div className={styles.navbar__links}>
				<ul>
					<li>
						<NavLink to='/register'>Register</NavLink>
					</li>
					<li>
						<NavLink to='/login'>Login</NavLink>
					</li>
					<li>
						<NavLink to='/cart'>Cart</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
