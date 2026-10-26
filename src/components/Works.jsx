import { works } from "../data.js";
import Reveal from "./Reveal.jsx";
import "./Works.css";

export default function Works() {
  return (
    <section id="works" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Featured <span>works</span></h2>
          <p className="section-sub">
            Selected video edits — full projects, playable right here. Sound on 🔊
          </p>
        </Reveal>

        <div className="works-grid">
          {works.map((w, i) => (
            <Reveal as="article" className="work-card glass" key={w.src} delay={(i % 2) * 100}>
              <div className="work-video">
                <video controls preload="none" poster={w.poster} src={w.src}>
                  Your browser doesn't support HTML5 video.
                </video>
              </div>
              <div className="work-info">
                <h3>{w.title}</h3>
                <div className="work-tags">
                  {w.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="works-foot" delay={160}>
          More edits and daily work live on my{" "}
          <a href="https://www.instagram.com/fasl__mp4" target="_blank" rel="noreferrer">
            Instagram →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
