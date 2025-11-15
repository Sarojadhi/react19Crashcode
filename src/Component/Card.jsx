import React from 'react';
import { useTheme } from '../Hook/useContextc+ propDrilling/ThemeContext';
const Card = ({ title }) => {
  const { theme } = useTheme();

  return (
    <div className={`p-6 mt-6 border rounded-xl shadow-sm ${theme === "light" ? "bg-gray-100 border-gray-300" : "bg-gray-800 border-gray-600"}`}>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">Theme is: <strong>{theme.toUpperCase()}</strong></p>
    </div>
  );
};

export default Card;
