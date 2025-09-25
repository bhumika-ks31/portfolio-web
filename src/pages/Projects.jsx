import React from "react";
import "./Project.css";

import Zerodha from "../assets/Zerodha.jpg";
import Echomeet from "../assets/Echomeeet.jpg";
import Botcart from "../assets/Botcart.jpg";
import Chatabit from "../assets/Chatabit.jpg";
import Gptika from "../assets/Gptika.jpg";

const projects = [
  {
    title: "Zerodha Clone",
    description:
      "A pixel-perfect clone of Zerodha built using React and Tailwind CSS. It highlights attention to layout and responsive design.",
    image: Zerodha,
    github: "https://github.com/bhumika-ks31/zerodha-clone",
  },
  {
    title: "Echomeet (Video Calling App)",
    description:
      "A WebRTC-based video calling platform with real-time screen share, mute/cam toggle and smooth UI. Built in React + Node.",
    image: Echomeet,
    github: "https://github.com/bhumika-ks31/ECHOMEET",
  },
  {
    title: "BotCart (E-commerce Bot)",
    description:
      "An AI-powered bot that helps users shop smarter. Suggests products, manages cart actions — built with Dialogflow, Redux.",
    image: Botcart,
    github: "https://github.com/bhumika-ks31/BotCart",
  },
  {
    title: "Chatabit (MERN Chat App)",
    description:
      "Feature-rich chat app with real-time messaging, group chat, typing indicator, emoji reactions. Built using the MERN stack.",
    image: Chatabit,
    github: "https://github.com/bhumika-ks31/CHATABIT",
  },
  {
    title: "Gptika (OpenAI Chatbot)",
    description:
      "A GPT-4 based chatbot with voice input, dark theme, typing animation — feels like ChatGPT in your portfolio!",
    image: Gptika,
    github: "https://github.com/bhumika-ks31/GPTIKA",
  },
];

export default function Project() {
  return (
    <div className="projects-section">
      <h1 className="projects-heading">🚀 My Projects</h1>
      {projects.map((proj, idx) => (
        <div className={`project-card ${idx % 2 === 0 ? "left" : "right"}`} key={idx}>
          <div className="project-image">
            <img src={proj.image} alt={proj.title} />
          </div>
          <div className="project-text">
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <a href={proj.github} target="_blank" rel="noopener noreferrer">
              💻 Source Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
