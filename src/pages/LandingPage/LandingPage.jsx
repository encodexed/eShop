import styles from "./LandingPage.module.scss";
import Button from "../../components/Button/Button";

const LandingPage = () => {
	return (
		<div className={styles.landing_page}>
			<main className={styles.landing_content}>
				<div className={styles.landing_content__container}>
					<h1 className={styles.landing_content__heading}>
						The Mysterious Stranger
					</h1>
					<p className={styles.landing_content__flavour_text}>
						All manner of games and gifts for sale...
					</p>
					<Button
						onClick={() => console.log("click")}
						text='Come see our wares...'
					/>
				</div>
			</main>
		</div>
	);
};

export default LandingPage;
