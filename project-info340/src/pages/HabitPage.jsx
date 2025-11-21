import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const initialHabits = [
  {
    id: 1,
    name: "Drink 8 glasses of water",
    category: "Health",
    description: "Stay hydrated throughout the day",
    frequency: "Daily",
    streak: 5,
    completed: true,
  },
  {
    id: 2,
    name: "Read for 30 minutes",
    category: "Learning",
    description: "Daily reading habit",
    frequency: "Daily",
    streak: 3,
    completed: false,
  },
];

const HabitItem = ({ habit, onToggle }) => (
  <div className={`habit-item ${habit.completed ? "completed" : ""}`}>
    <div className="habit-info">
      <div className="habit-header">
        <h3 className="habit-name">{habit.name}</h3>
        <span className="habit-category">{habit.category === "Health" ? "🏃‍♂️" : "📚"}</span>
      </div>
      <p className="habit-description">{habit.description}</p>
      <div className="habit-meta">
        <span className="habit-frequency">{habit.frequency}</span>
        <span className="habit-streak">{habit.streak} day streak</span>
      </div>
    </div>
    <div className="habit-actions">
      <button
        className={`habit-toggle ${habit.completed ? "completed" : ""}`}
        aria-label="Mark habit as complete"
        onClick={() => onToggle(habit.id)}
      >
        {habit.completed ? "✓" : "○"}
      </button>
    </div>
  </div>
);

const HabitPage = () => {
  const [habits, setHabits] = useState(initialHabits);

  const handleToggle = (id) => {
    // Simple function to toggle habit completion
    const updatedHabits = habits.map((habit) => {
      if (habit.id === id) {
        return { ...habit, completed: !habit.completed };
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

  // Calculate stats from habits
  const completedCount = habits.filter((h) => h.completed).length;
  const totalCount = habits.length;
  const currentStreak = habits.length > 0 ? habits[0].streak : 0;

  return (
    <div className="mobile-container app-page habit-page">
      <header className="header">
        <h1>My Habits</h1>
      </header>

      <Navbar />

      <main className="content">
        <div className="section">
          <div className="habits-header">
            <h2>Active Habits</h2>
            <Link to="/create" className="btn btn-primary btn-small">
              + Add Habit
            </Link>
          </div>

          <div className="habits-list">
            {habits.map((habit) => (
              <HabitItem key={habit.id} habit={habit} onToggle={handleToggle} />
            ))}
          </div>
        </div>

        <div className="section">
          <h2>Today's Progress</h2>
          <div className="progress-summary">
            <div className="progress-item">
              <span className="progress-label">Completed</span>
              <span className="progress-value">{completedCount}</span>
            </div>
            <div className="progress-item">
              <span className="progress-label">Total</span>
              <span className="progress-value">{totalCount}</span>
            </div>
            <div className="progress-item">
              <span className="progress-label">Streak</span>
              <span className="progress-value">{currentStreak}</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HabitPage;
