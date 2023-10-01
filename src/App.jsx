import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Normalise.css";
import BackgroundWrapper from "./components/BackgroundWrapper/BackgroundWrapper";
import DarkModeContextProvider from "./components/contexts/DarkModeContextProvider/DarkModeContextProvider";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import styles from "./App.module.scss";

const App = () => {
	return (
		<div className={styles.app}>
			<DarkModeContextProvider>
				<BackgroundWrapper>
					<BrowserRouter>
						<Navbar />
						<Routes>
							<Route path='/' element={<LandingPage />} />
						</Routes>
					</BrowserRouter>
				</BackgroundWrapper>
			</DarkModeContextProvider>
		</div>
	);
};

export default App;
