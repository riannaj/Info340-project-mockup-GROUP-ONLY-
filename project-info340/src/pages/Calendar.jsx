import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Calendar = () => {
  // Static calendar - no interactivity
  const currentMonth = 0; // January
  const currentYear = 2024;

  // Hardcoded calendar days for January 2024
  const calendarDays = [
    { day: 29, isOtherMonth: true },
    { day: 30, isOtherMonth: true },
    { day: 31, isOtherMonth: true },
    { day: 1, isOtherMonth: false },
    { day: 2, isOtherMonth: false },
    { day: 3, isOtherMonth: false },
    { day: 4, isOtherMonth: false },
    { day: 5, isOtherMonth: false },
    { day: 6, isOtherMonth: false },
    { day: 7, isOtherMonth: false },
    { day: 8, isOtherMonth: false },
    { day: 9, isOtherMonth: false },
    { day: 10, isOtherMonth: false },
    { day: 11, isOtherMonth: false },
    { day: 12, isOtherMonth: false },
    { day: 13, isOtherMonth: false },
    { day: 14, isOtherMonth: false },
    { day: 15, isOtherMonth: false },
    { day: 16, isOtherMonth: false },
    { day: 17, isOtherMonth: false },
    { day: 18, isOtherMonth: false },
    { day: 19, isOtherMonth: false },
    { day: 20, isOtherMonth: false },
    { day: 21, isOtherMonth: false },
    { day: 22, isOtherMonth: false },
    { day: 23, isOtherMonth: false },
    { day: 24, isOtherMonth: false },
    { day: 25, isOtherMonth: false },
    { day: 26, isOtherMonth: false },
    { day: 27, isOtherMonth: false },
    { day: 28, isOtherMonth: false },
    { day: 29, isOtherMonth: false },
    { day: 30, isOtherMonth: false },
    { day: 31, isOtherMonth: false },
    { day: 1, isOtherMonth: true },
    { day: 2, isOtherMonth: true },
    { day: 3, isOtherMonth: true },
    { day: 4, isOtherMonth: true },
    { day: 5, isOtherMonth: true },
    { day: 6, isOtherMonth: true },
    { day: 7, isOtherMonth: true },
    { day: 8, isOtherMonth: true },
    { day: 9, isOtherMonth: true },
    { day: 10, isOtherMonth: true },
  ];

  // Sample stats
  const completed = 22;
  const successRate = 71;

  return (
    <div className="mobile-container app-page calendar-page">
      <header className="header">
        <h1>Calendar</h1>
      </header>

      <Navbar />

      <main className="content">
        <div className="section">
          <div className="calendar-header">
            <div className="nav-btn" style={{ visibility: "hidden" }}>‹</div>
            <h2>{monthNames[currentMonth]} {currentYear}</h2>
            <div className="nav-btn" style={{ visibility: "hidden" }}>›</div>
          </div>

          <div className="calendar-grid">
            <div className="calendar-weekdays">
              {weekdays.map((day) => (
                <div key={day} className="weekday">
                  {day}
                </div>
              ))}
            </div>
            <div className="calendar-days">
              {calendarDays.map((dayObj, index) => (
                <div
                  key={index}
                  className={`calendar-day ${dayObj.isOtherMonth ? "other-month" : ""}`}
                >
                  {dayObj.day}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section">
          <div className="monthly-stats">
            <div className="stat-item">
              <span className="stat-label">Completed</span>
              <span className="stat-value">{completed}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Success Rate</span>
              <span className="stat-value">{successRate}%</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Calendar;
