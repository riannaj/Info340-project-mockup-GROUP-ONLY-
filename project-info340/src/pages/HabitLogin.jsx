import { useState } from "react";
import { useNavigate, Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HabitLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    navigate("/home");
  };

  return (
    <div className="mobile-container app-page login-page">
      <header className="header">
        <h1>Habit Hive</h1>
      </header>

      <Navbar />

      <main className="content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-input"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn" type="submit">
            Log In
          </button>

          <div className="login-actions">
            <div className="forgot-password">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/signup");
                }}
              >
                Sign Up
              </a>
            </div>

            <div className="forgot-password">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/forgot-password");
                }}
              >
                Forgot password?
              </a>
            </div>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default HabitLogin;
