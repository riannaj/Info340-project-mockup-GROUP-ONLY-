import { useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Welcome" },
    { path: "/home", label: "Home" },
    { path: "/buddy", label: "Buddy" },
    { path: "/community", label: "Community" },
    { path: "/habits", label: "Habits" },
    { path: "/calendar", label: "Calendar" },
  ];

  return (
    <nav className="nav-bar" aria-label="Primary">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <a
            key={item.path}
            href={item.path}
            className={`nav-item ${isActive ? "active" : ""}`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
