import React from 'react';  
import { useTheme } from '../Hook/useContextPluspropDrilling/ThemeContext';
const ThemeToggles = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 mt-4 rounded transition bg-transparent duration-300"
    >
    {theme === "light" ? "🌙" : "☀️"} 
    </button>
  );
};

export default ThemeToggles;
