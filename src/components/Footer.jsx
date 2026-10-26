import { profile, socials } from "../data.js";
import Icon from "./Icon.jsx";
import "./Footer.css";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="copy">
          © {year} {profile.name} — Made with ☕ & gradients in Bangladesh
        </div>
        <div className="footer-socials">
          {socials.map((s) => (
            <a href={s.url} target="_blank" rel="noreferrer" key={s.name} title={s.name}
               aria-label={s.name}>
              <Icon name={s.icon} size="1.05rem" />
            </a>
          ))}
        </div>
      </div>

      <div className="credit container">
        Made by{" "}
        <a href="https://jawadurrafid.com" target="_blank" rel="noreferrer">
          Jawadur Rafid
        </a>
      </div>
    </footer>
  );
}
