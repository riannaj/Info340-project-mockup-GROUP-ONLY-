import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categories = [
  { value: "health", label: "🏃‍♂️ Health & Fitness" },
  { value: "productivity", label: "💼 Productivity" },
  { value: "mindfulness", label: "🧘‍♀️ Mindfulness" },
  { value: "learning", label: "📚 Learning" },
  { value: "social", label: "👥 Social" },
  { value: "hobbies", label: "🎨 Hobbies" },
  { value: "other", label: "🔧 Other" },
];

const HabitCreator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    habitName: "",
    habitDescription: "",
    habitCategory: "",
    frequency: "",
    reminderTime: "",
    difficulty: "medium",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would save to a backend
    // For now, just navigate away
    console.log("Form submitted:", formData);
    navigate("/habits");
  };

  const handleCancel = () => {
    navigate("/habits");
  };

  return (
    <div className="mobile-container app-page creator-page">
      <header className="header">
        <h1>Create Habit</h1>
      </header>

      <Navbar />

      <main className="content">
        <div className="section">
          <form className="habit-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="habitName">Habit Name</label>
              <input
                type="text"
                id="habitName"
                name="habitName"
                placeholder="e.g., Drink 8 glasses of water"
                value={formData.habitName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="habitDescription">Description (Optional)</label>
              <textarea
                id="habitDescription"
                name="habitDescription"
                placeholder="Add a description for your habit..."
                rows="3"
                value={formData.habitDescription}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="habitCategory">Category</label>
              <select
                id="habitCategory"
                name="habitCategory"
                value={formData.habitCategory}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="frequency">Frequency</label>
              <select
                id="frequency"
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                required
              >
                <option value="">How often?</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="reminderTime">Reminder Time</label>
              <input
                type="time"
                id="reminderTime"
                name="reminderTime"
                value={formData.reminderTime}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="difficulty">Difficulty Level</label>
              <div className="difficulty-options">
                {["easy", "medium", "hard"].map((level) => (
                  <label key={level} className="difficulty-option">
                    <input
                      type="radio"
                      name="difficulty"
                      value={level}
                      checked={formData.difficulty === level}
                      onChange={handleChange}
                    />
                    <span className="difficulty-label">
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="btn btn-secondary"
                aria-label="Cancel creating new habit"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Create Habit
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HabitCreator;
