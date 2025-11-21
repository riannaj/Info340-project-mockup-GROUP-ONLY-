// App.jsx
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";

// Pages
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

// Define routes
const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/home", element: <HabitHome /> },
  { path: "/buddy", element: <HabitBuddy /> },
  { path: "/community", element: <Community /> },
  { path: "/habits", element: <HabitPage /> },
  { path: "/calendar", element: <Calendar /> },
  { path: "/create", element: <HabitCreator /> },
  { path: "/login", element: <HabitLogin /> },
  { path: "/signup", element: <HabitSignUp /> },
  { path: "/forgot-password", element: <HabitForgotPassword /> },

  // 404 page
  { path: "*", element: <h1>404 - Page Not Found</h1> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}