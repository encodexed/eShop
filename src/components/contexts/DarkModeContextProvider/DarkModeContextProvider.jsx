import { useState, createContext } from "react";
export const DarkModeContext = createContext(null);

const DarkModeContextProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export default DarkModeContextProvider;
