import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./WarePage.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Heading from "../../components/Heading/Heading";
import Gallery from "../../components/Gallery/Gallery";
import Info from "../../components/Info/Info";
import { getItemById } from "../../services/data-services";
import { StoreDataContext } from "../../components/contexts/StoreDataContextProvider/StoreDataContextProvider";

const WarePage = () => {
	const { id } = useParams();
	const { storeData } = useContext(StoreDataContext);
	const [wareData, setWareData] = useState(null);

	useEffect(() => {
		if (!storeData) {
			return;
		}
		const data = getItemById(id, storeData);
		setWareData(data);
	}, [id, storeData]);

	if (!wareData || !storeData) {
		return (
			<div className={styles.ware_page}>
				<Navbar />
				<p>Loading...</p>
			</div>
		);
	}

	const { imageLinks, title } = wareData;

	return (
		<div className={styles.ware_page}>
			<Navbar />
			<main className={styles.ware_page__container}>
				<div className={styles.ware_page__content_wrapper}>
					<div className={styles.ware_page__content_wrapper__inner}>
						<Heading text={title} size='60px' />
						<Gallery imageLinks={imageLinks} />
						<Info data={wareData} />
					</div>
				</div>
			</main>
		</div>
	);
};

export default WarePage;
