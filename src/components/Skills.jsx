import { skills } from "../data.js";
import Reveal from "./Reveal.jsx";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">My <span>toolbox</span></h2>
          <p className="section-sub">
            Everything I use to design, edit and grow — daily.
          </p>
        </Reveal>

        <div className="skills-groups">
          {Object.entries(skills).map(([group, items], i) => (
            <Reveal className="skill-group" key={group} delay={i * 110}>
              <h3>{group}</h3>
              <div className="chips">
                {items.map((skill) => (
                  <span className="chip" key={skill}>{skill}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
