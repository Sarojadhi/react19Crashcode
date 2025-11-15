import React from 'react';  
import { useTheme } from '../Hook/useContextc+ propDrilling/ThemeContext';
const ThemeToggles = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 mt-4 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggles;
