import React from "react";
import "./Contact.css";
import ContactImg from "../assets/Contact.jpg"; // Make sure image is inside assets

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-left">
        <img src={ContactImg} alt="Contact Background" className="contact-bg-image" />
        <div className="contact-overlay"></div>
      </div>

      <div className="contact-right">
        <h1 className="contact-heading">
          📞 Contact Me <span className="highlight-text">— Let's Connect</span>
        </h1>

        <div className="contact-card">
          <h2>📬 Reach Out</h2>
          <p>
            <strong>📧 Email:</strong> tilantajagra@gmail.com
          </p>
          <p>
            <strong>🔗 GitHub:</strong>{" "}
            <a href="https://github.com/bhumika-ks31" target="_blank" rel="noopener noreferrer">
              bhumika-ks31
            </a>
          </p>
          <p>
            <strong>🔗 LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/in/bhumika-kashyap-526330342/" target="_blank" rel="noopener noreferrer">
              bhumika-kashyap
            </a>
          </p>
          <p>
            <strong>⚡ Quick Note:</strong> I love turning ideas into real-world solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
