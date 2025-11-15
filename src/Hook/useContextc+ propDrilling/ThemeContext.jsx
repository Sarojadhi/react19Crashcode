import React, { createContext, useContext, useState } from "react";
// 1. Create Theme Context
const ThemeContext = createContext();

// 2. Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // initial theme

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "light" ? "bg-white text-black min-h-screen" : "bg-gray-900 text-white min-h-screen"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// 3. Custom hook for easy context access
export const useTheme = () => useContext(ThemeContext);
