import { useState} from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  

  // 🎨 Dynamic styles for dark/light mode
  const styles = {
    backgroundColor: dark ? "#222" : "#f9f9f9",
    color: dark ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={styles}>
      <h1>React useState </h1>
     {/* Dark Mode */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
}

export default ThemeToggle;