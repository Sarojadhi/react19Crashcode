import { useState, useEffect } from "react";

const Saroj = () => {
const text = `
  Saroj Adhikari
- Full Stack Developer |
  React Enthusiast |
  Tech Blogger |
  Open Source Contributor |
  Lifelong Learner |
  Problem Solver |
  Passionate Coder |
  Innovator |
  Team Player |
  Tech Community Advocate |
  Always Exploring New Horizons!
`;
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index));
      index++;

      if (index > text.length) clearInterval(interval);
    }, 120); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <h1 className="text-4xl font-bold text-white tracking-wide">
        {displayText}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
}
export default Saroj;
