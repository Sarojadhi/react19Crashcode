import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Admin login
    if (username === "admin" && password === "12345") {
      const userData = {
        username: "admin",
        role: "admin",
        isAuthenticated: true,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      setIsLoggedIn(true);
      navigate("/dashboard");
      return;
    }

    // Normal user login
    if (username === "user" && password === "12345") {
      const userData = {
        username: "user",
        role: "user",
        isAuthenticated: true,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      setIsLoggedIn(true);
      navigate("/dashboard");
      return;
    }

    setError("Invalid username or password!");
  };

  return (
    <div className="flex justify-center mt-20">
      <form className="bg-white shadow-xl p-8 rounded-xl w-80" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {error && <p className="text-red-600 text-center mb-3">{error}</p>}

        <input
          type="text"
          placeholder="Enter username"
          className="w-full border p-2 rounded mb-4"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          className="w-full border p-2 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button  type="submit" className="bg-blue-600 w-full py-2 text-white rounded font-bold">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
