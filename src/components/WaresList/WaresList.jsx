import { useContext } from "react";
import { StoreDataContext } from "../contexts/StoreDataContextProvider/StoreDataContextProvider";
import Ware from "../Ware/Ware";
import styles from "./WaresList.module.scss";

const WaresList = () => {
	const { storeData } = useContext(StoreDataContext);

	return (
		<>
			{!storeData && <p>Loading</p>}
			{storeData && (
				<div className={styles.wares_list}>
					{storeData.map((data) => (
						<Ware key={data.id} data={data} />
					))}
				</div>
			)}
		</>
	);
};

export default WaresList;
