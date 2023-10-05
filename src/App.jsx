import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Normalise.css";
import WaresPage from "./pages/WaresPage/WaresPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import styles from "./App.module.scss";
import StoreDataContextProvider from "./components/contexts/StoreDataContextProvider/StoreDataContextProvider";
import CartContextProvider from "./components/contexts/CartContextProvider/CartContextProvider";
import PageNotFoundPage from "./pages/PageNotFoundPage/PageNotFoundPage";
import WarePage from "./pages/WarePage/WarePage";

const App = () => {
	return (
		<div className={styles.app}>
			<StoreDataContextProvider>
				<CartContextProvider>
					<BrowserRouter>
						<Routes>
							<Route path='*' element={<PageNotFoundPage />} />
							<Route path='/' element={<LandingPage />} />
							<Route path='/wares' element={<WaresPage />} />
							<Route path='/wares/:id/:slug' element={<WarePage />} />
						</Routes>
					</BrowserRouter>
				</CartContextProvider>
			</StoreDataContextProvider>
		</div>
	);
};

export default App;
