import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg" /> {/* Ảnh nền đặt ngoài overlay */}

      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Avatar: The Way of Water</h1>
          <div className="tags">
            <span>Action</span>
            <span>Adventure</span>
            <span>Science Fiction</span>
          </div>
          <div className="meta">
            <span>2022</span> · <span>3:12:00</span> · <span>⭐ 8.5</span>
          </div>
          <p>
            See more than a decade after the events of the first film, learn
            the story of the Sully family (Jake, Neytiri, and their kids)...
          </p>
          <div className="hero-buttons">
            <button className="watch-now">▶ Watch Now</button>
            <button className="watch-later">☆ Watch Later</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
