import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HabitForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };


  return (
    <div className="mobile-container app-page login-page">
      <header className="header">
        <h1>Habit Hive</h1>
      </header>

      <Navbar />

      <main className="content">
        <form>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn" type="submit">
            Send Reset Email
          </button>
          <div className="login-actions">
            <div className="forgot-password">
              <a href="#" onClick={(e) => { e.preventDefault(); navigate("/login"); }}>
                Log In
              </a>
            </div>
            <div className="forgot-password">
              <a href="#" onClick={(e) => { e.preventDefault(); navigate("/signup"); }}>
                Sign Up
              </a>
            </div>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default HabitForgotPassword;

