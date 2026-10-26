import { profile, socials } from "../data.js";
import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";
import "./Contact.css";

const cards = [
  { key: "email", title: "Email", value: profile.email, url: `mailto:${profile.email}`, icon: "email" },
  { key: "whatsapp", title: "WhatsApp", value: profile.whatsapp, url: socials[2].url, icon: "whatsapp" },
  { key: "instagram", title: "Instagram", value: "@fasl__mp4", url: socials[1].url, icon: "instagram" },
  { key: "facebook", title: "Facebook", value: "Add me on Facebook", url: socials[0].url, icon: "facebook" },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Let's <span>connect</span></h2>
          <p className="section-sub">
            Got a page to grow, a video to cut or a design in mind? My inbox is always open.
          </p>
        </Reveal>

        <div className="contact-grid">
          {cards.map((c, i) => (
            <Reveal as="a" className="contact-card glass" href={c.url} key={c.key} delay={i * 80}
               target={c.url.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
              <div className="contact-icon"><Icon name={c.icon} size="1.2rem" /></div>
              <h3>{c.title}</h3>
              <div className="value">{c.value}</div>
              <div className="arrow">Reach out →</div>
            </Reveal>
          ))}
        </div>

        <Reveal className="contact-cta" delay={140}>
          <div>
            <h3>Let's make your next thing go viral.</h3>
            <p>Fast replies, fast edits. Usually responding within 24 hours.</p>
          </div>
          <a className="btn btn-invert" href={`mailto:${profile.email}`}>
            <Icon name="email" size="1rem" /> Say hello
          </a>
        </Reveal>
      </div>
    </section>
  );
}
