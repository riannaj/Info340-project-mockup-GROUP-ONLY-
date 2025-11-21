import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const clothingItems = [
  { id: 1, emoji: "👕", name: "Striped Shirt", label: "Striped Shirt outfit option" },
  { id: 2, emoji: "👕", name: "Red Shirt", label: "Red Shirt outfit option" },
  { id: 3, emoji: "👕", name: "Green Shirt", label: "Green Shirt outfit option" },
  { id: 4, emoji: "🧢", name: "Cap", label: "Cap outfit option" },
  { id: 5, emoji: "🎩", name: "Hat", label: "Hat outfit option" },
  { id: 6, emoji: "👗", name: "Dress", label: "Dress outfit option" },
  { id: 7, emoji: "👟", name: "Shoes", label: "Shoes outfit option" },
  { id: 8, emoji: "🕶️", name: "Sunglasses", label: "Sunglasses outfit option" },
  { id: 9, emoji: "🎀", name: "Bow Tie", label: "Bow tie outfit option" },
];

const ClothingItem = ({ emoji, name, label }) => (
  <button type="button" className="clothing-item" aria-label={label}>
    <div>{emoji}</div>
    <div className="clothing-item-name">{name}</div>
  </button>
);

const HabitBuddy = () => {
  const points = 50;

  return (
    <div className="mobile-container app-page buddy-page">
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
            Points: {points}
          </div>
        </div>

        <div className="section">
          <div className="clothing-section">
            <div className="clothing-icon">🐝</div>
            <h3>Avatar clothing</h3>
          </div>

          <div className="clothing-grid">
            {clothingItems.map((item) => (
              <ClothingItem
                key={item.id}
                emoji={item.emoji}
                name={item.name}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HabitBuddy;
