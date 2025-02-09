import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = ["About", "Portfolio", "Contact", "Resume"];

  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">Your Name</h1>
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item}>
            <Link
              to={`/${item.toLowerCase()}`}
              className={`hover:underline ${
                activeSection === item ? "font-bold" : ""
              }`}
              onClick={() => setActiveSection(item)}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
