import { useEffect, useRef, useState } from "react";
import { profile, photoUrl, rotatingHeadlines } from "../data.js";
import "./Hero.css";

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [prev, setPrev] = useState(null);
  const firstRun = useRef(true);

  useEffect(() => {
    const delay = firstRun.current ? 4200 : 2900;
    firstRun.current = false;
    const t = setTimeout(() => {
      setPrev(idx);
      setIdx((idx + 1) % rotatingHeadlines.length);
    }, delay);
    return () => clearTimeout(t);
  }, [idx]);

  return (
    <section id="top" className="hero">
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-tag">{profile.role}</span>
          <h1 aria-label={`I craft ${rotatingHeadlines[idx].replace(".", "")}`}>
            <span className="h1-line" aria-hidden="true">{profile.tagline}</span>
            <span className="accent rotator" aria-hidden="true">
              {prev !== null && prev !== idx && (
                <span className="rot-old" key={`p-${prev}`}>{rotatingHeadlines[prev]}</span>
              )}
              <span className="rot-new" key={`n-${idx}`}>{rotatingHeadlines[idx]}</span>
            </span>
          </h1>
          <p>
            Hi, I'm {profile.name} — a multidisciplinary creative from
            Bangladesh. Video edits, graphics and social media that make
            brands impossible to scroll past.
          </p>
          <div className="hero-actions">
            <a href="#works" className="btn btn-primary">View my work ↓</a>
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
