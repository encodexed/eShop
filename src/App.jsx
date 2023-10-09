import "./Normalise.css";
import styles from "./App.module.scss";
import StoreDataContextProvider from "./components/contexts/StoreDataContextProvider/StoreDataContextProvider";
import CartContextProvider from "./components/contexts/CartContextProvider/CartContextProvider";
import AppRoutes from "./AppRoutes";

const App = () => {
	return (
		<div className={styles.app}>
			<CartContextProvider>
				<StoreDataContextProvider>
					<AppRoutes />
				</StoreDataContextProvider>
			</CartContextProvider>
		</div>
	);
};

export default App;
