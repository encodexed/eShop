import { formatStockList } from "../../services/basic-services";
import styles from "./Stock.module.scss";

const Stock = ({ stock }) => {
	console.log(stock);

	const stockReadOut = formatStockList(stock);

	return (
		<div className={styles.stock}>
			<ul className={styles.stock__list}>
				<li>
					<span className={styles.stock__key_pc}>PC: </span>
					{stockReadOut.pc}
				</li>
				<li>
					<span className={styles.stock__key_playstation}>Playstation: </span>
					{stockReadOut.playstation}
				</li>
				<li>
					<span className={styles.stock__key_xbox}>Xbox: </span>
					{stockReadOut.xbox}
				</li>
				<li>
					<span className={styles.stock__key_switch}>Nintendo Switch: </span>
					{stockReadOut.nSwitch}
				</li>
			</ul>
		</div>
	);
};

export default Stock;
