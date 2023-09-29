import "./Normalise.css";
import styles from "./App.module.scss";
import BackgroundWrapper from "./components/BackgroundWrapper/BackgroundWrapper";
import DarkModeContextProvider from "./components/contexts/DarkModeContextProvider/DarkModeContextProvider";
import DarkToggle from "./components/DarkToggle/DarkToggle";

const App = () => {
	return (
		<>
			<DarkModeContextProvider>
				<BackgroundWrapper>
					<div className={styles.app}>
						<DarkToggle />
						<p>Here is a test paragraph</p>
					</div>
				</BackgroundWrapper>
			</DarkModeContextProvider>
		</>
	);
};

export default App;
