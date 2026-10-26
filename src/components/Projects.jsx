import { projects } from "../data.js";
import Reveal from "./Reveal.jsx";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">What I <span>make</span></h2>
          <p className="section-sub">
            A snapshot of the work I do — edits, designs and social pages. New case studies dropping soon.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal as="article" className="project-card glass" key={p.title} delay={(i % 3) * 90}>
              <div className="project-banner" style={{ background: p.grad }}>
                <span>{p.emoji}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
