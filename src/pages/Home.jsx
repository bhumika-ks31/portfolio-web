import React from "react";
import "./Home.css";
import HeroImg from "../assets/Hero.jpg"; // ✅ sahi import

export default function Home() {
  return (
    <div className="hero-section">
      <div className="hero-left">
        <h1 className="hero-title">Hi, I'm Bhumika kashyap</h1>
        <h2 className="hero-subtitle">Full Stack Developer (MERN + Java)</h2>
        <p className="hero-description">
            a passionate and fast-learning Full Stack Developer (MERN) with a strong foundation in Java, DSA, and Web Development.

        </p>
        <a href="/projects" className="hero-button">See My Work 🚀</a>
      </div>
      <div className="hero-right">
        <img src={HeroImg} alt="developer" className="hero-image" /> {/* ✅ yeh line fix */}
      </div>
    </div>
  );
}
