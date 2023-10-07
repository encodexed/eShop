import "./Normalise.css";
import styles from "./App.module.scss";
import StoreDataContextProvider from "./components/contexts/StoreDataContextProvider/StoreDataContextProvider";
import CartContextProvider from "./components/contexts/CartContextProvider/CartContextProvider";
import AppRoutes from "./AppRoutes";

const App = () => {
	return (
		<div className={styles.app}>
			<StoreDataContextProvider>
				<CartContextProvider>
					<AppRoutes />
				</CartContextProvider>
			</StoreDataContextProvider>
		</div>
	);
};

export default App;
