import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import { profile } from "../data.js";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="nav-inner glass">
          <a href="#top" className="logo" onClick={close}>
            <em className="logo-mark">{profile.firstName[0]}</em>
            <span>faisal</span>
            <span>mp4</span>
          </a>

          <div className="nav-right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle light/dark theme"
              title="Toggle theme"
            >
              <Icon name={theme === "light" ? "sun" : "moon"} size="1.05rem" />
            </button>

            <button className="burger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              ≡
            </button>
          </div>

          <ul className={`links ${open ? "open" : ""}`}>
            <li><a href="#about" onClick={close}>About</a></li>
            <li><a href="#skills" onClick={close}>Skills</a></li>
            <li><a href="#works" onClick={close}>Works</a></li>
            <li><a href="#contact" onClick={close}>Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
