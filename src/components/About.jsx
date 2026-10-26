import { bio, services, stats, experience, education } from "../data.js";
import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <Reveal className="about-text">
          <h2 className="section-title">About <span>me</span></h2>
          {bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="about-card glass" delay={120}>
          {services.map((s) => (
            <div className="service" key={s.title}>
              <div className="service-icon"><Icon name={s.icon} size="1.15rem" /></div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}

          <div>
            <div className="card-label">Experience</div>
            <div className="timeline">
              {experience.map((item) => (
                <div className="timeline-item" key={item.title}>
                  <div className="period">{item.period}</div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="card-label">Education</div>
            <div className="timeline">
              {education.map((item) => (
                <div className="timeline-item" key={item.title}>
                  <div className="period">{item.period}</div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
