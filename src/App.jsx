import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Normalise.css";
import WaresPage from "./pages/WaresPage/WaresPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import styles from "./App.module.scss";
import StoreDataContextProvider from "./components/contexts/StoreDataContextProvider/StoreDataContextProvider";

const App = () => {
	return (
		<div className={styles.app}>
			<StoreDataContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<LandingPage />} />

						<Route path='/wares' element={<WaresPage />} />
					</Routes>
				</BrowserRouter>
			</StoreDataContextProvider>
		</div>
	);
};

export default App;
