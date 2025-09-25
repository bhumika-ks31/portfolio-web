import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = {
    margin: "0 1rem",
    textDecoration: "none",
    color: "#f1f5f9",
    fontWeight: "500"
  };

  const activeStyle = {
    color: "#38bdf8",
    borderBottom: "2px solid #38bdf8"
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#38bdf8" }}>
        MyPortfolio
      </div>
      <div>
        <NavLink
          to="/"
          end
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

const navStyle = {
  backgroundColor: "#0f172a",
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 10
};
