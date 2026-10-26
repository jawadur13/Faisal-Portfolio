import { profile, photoUrl } from "../data.js";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-tag">{profile.role}</span>
          <h1>
            {profile.headline[0]}
            <span className="accent">{profile.headline[1]}</span>
          </h1>
          <p>
            Hi, I'm {profile.name} — a multidisciplinary creative from
            Bangladesh. Video edits, graphics and social media that make
            brands impossible to scroll past.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View my work ↓</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-ring" />
          <img src={photoUrl} alt={`Portrait of ${profile.name}`} />
          <div className="photo-badge">
            <span className="dot" />
            Open to work
          </div>
        </div>
      </div>

      <div className="scroll-hint">SCROLL</div>
    </section>
  );
}
