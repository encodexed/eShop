import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Normalise.css";
import WaresPage from "./pages/WaresPage/WaresPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import styles from "./App.module.scss";

const App = () => {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/wares' element={<WaresPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
