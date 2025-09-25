import React from "react";
import "./About.css";
import AboutImg from "../assets/About.jpg";

export default function About() {
  return (
    <div className="about-section">
      <div className="about-left">
        <img src={AboutImg} alt="About Background" className="about-bg-image" />
        <div className="overlay"></div>
      </div>

      <div className="about-right">
    <h1 className="about-heading">
  👋 About Me <span className="highlight-text">— Developer, Learner & Builder</span>
</h1>

        <div className="about-card">
          <h2>🚀 Currently Learning</h2>
          <ul>
            <li> Java + DSA (Leetcode, recursion, trees)</li>
            <li>Full Stack: React, Node.js, MongoDB</li>
            <li>Version Control & Collaboration: Git & GitHub </li>
            <li>Mastering Problem Solving & Core CS Fundamentals</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>🛠️ Tech Stack</h2>
          <p><strong>Languages:</strong> C, Java, JavaScript</p>
          <p><strong>Frontend:</strong> React 19, HTML, CSS, Tailwind CSS</p>
          <p><strong>Backend & DB:</strong> Node.js, Express, MongoDB, MySQL</p>
          <p><strong>Tools:</strong> Git, GitHub, Vercel, Render, Postman, VSCode</p>
        </div>

       <div className="about-card">
  <h2>📫 Let’s Connect</h2>
  <p>
    🔗 <strong>GitHub:</strong>{" "}
    <a href="https://github.com/bhumika-ks31" target="_blank" rel="noopener noreferrer">
      bhumika-ks31
    </a>
  </p>
  <p>
    🔗 <strong>LinkedIn:</strong>{" "}
    <a href="https://www.linkedin.com/in/bhumika-kashyap-526330342/" target="_blank" rel="noopener noreferrer">
      bhumika-kashyap
    </a>
  </p>
  <p>📧 <strong>Email:</strong> tilantajagra@gmail.com</p>
  <p>⚡ <strong>Fun fact:</strong> I don’t just learn — I build while learning.</p>
</div>

      </div>
    </div>
  );
}
