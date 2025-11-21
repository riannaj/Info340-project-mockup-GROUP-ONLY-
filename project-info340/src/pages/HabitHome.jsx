import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HabitHome = () => {
  const stats = {
    currentStreak: 15,
    longestStreak: 15,
    points: 50,
  };

  return (
    <div className="mobile-container app-page home-page">
      <header className="header">
        <h1>Habit Hive</h1>
      </header>

      <Navbar />

      <main className="content">
        <div className="section">
          <h2>Habit Buddy</h2>
          <div className="bee-avatar">
            <img src="/img/bee-buddy.jpg" alt="Bee Buddy illustration" className="bee-image" />
          </div>
          <div className="points-summary">
            <h3>Stats</h3>
            <div className="stats">
              <div>Current Streak: {stats.currentStreak} days</div>
              <div>Longest Streak: {stats.longestStreak} days</div>
              <div>Points: {stats.points}</div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Habits</h2>
          <div className="placeholder-box">
            No habits yet
          </div>
        </div>

        <div className="section">
          <h2>Community</h2>
          <div className="placeholder-box">
            No community posts yet
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HabitHome;
