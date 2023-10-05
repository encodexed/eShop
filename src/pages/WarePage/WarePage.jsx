import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../../services/fake-backend-services";
import styles from "./WarePage.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Heading from "../../components/Heading/Heading";
import Gallery from "../../components/Gallery/Gallery";
import Info from "../../components/Info/Info";

const WarePage = () => {
	const { id } = useParams();
	const [wareData, setWareData] = useState(null);

	useEffect(() => {
		const fetchData = async (itemID) => {
			try {
				const data = await getItemById(itemID);
				console.log(data);
				setWareData(data);
			} catch (e) {
				console.error(e.message);
			}
		};
		fetchData(id);
	}, [id]);

	if (!wareData) {
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
				<Heading text={title} size='60px' />
				<Gallery imageLinks={imageLinks} />
				<Info data={wareData} />
			</main>
		</div>
	);
};

export default WarePage;
