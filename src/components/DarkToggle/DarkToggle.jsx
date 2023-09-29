import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContextProvider/DarkModeContextProvider";

const DarkToggle = () => {
	const { darkMode, setDarkMode } = useContext(DarkModeContext);

	return (
		<button
			onClick={() => {
				setDarkMode(!darkMode);
			}}
		>
			Toggle Dark Mode
		</button>
	);
};

export default DarkToggle;
