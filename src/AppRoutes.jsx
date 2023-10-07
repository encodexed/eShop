import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFoundPage from "./pages/PageNotFoundPage/PageNotFoundPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import WaresPage from "./pages/WaresPage/WaresPage";
import CartPage from "./pages/CartPage/CartPage";
import WarePage from "./pages/WarePage/WarePage";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='*' element={<PageNotFoundPage />} />
				<Route path='/' element={<LandingPage />} />
				<Route path='/wares' element={<WaresPage />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='/wares/:id/:slug' element={<WarePage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
