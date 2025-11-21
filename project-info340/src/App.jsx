import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing.jsx";
import HabitHome from "./pages/HabitHome.jsx";
import HabitBuddy from "./pages/HabitBuddy.jsx";
import Community from "./pages/Community.jsx";
import HabitPage from "./pages/HabitPage.jsx";
import Calendar from "./pages/Calendar.jsx";
import HabitCreator from "./pages/HabitCreator.jsx";
import HabitLogin from "./pages/HabitLogin.jsx";
import HabitSignUp from "./pages/HabitSignUp.jsx";
import HabitForgotPassword from "./pages/HabitForgotPassword.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<HabitHome />} />
        <Route path="/buddy" element={<HabitBuddy />} />
        <Route path="/community" element={<Community />} />
        <Route path="/habits" element={<HabitPage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/create" element={<HabitCreator />} />
        <Route path="/login" element={<HabitLogin />} />
        <Route path="/signup" element={<HabitSignUp />} />
        <Route path="/forgot-password" element={<HabitForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
