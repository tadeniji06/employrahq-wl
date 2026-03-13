"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-logo">
        <span className="nav-logo-dot" />
        EmployraHQ
      </div>
      <ul className="nav-links">
        <li><a href="#features" className="animated-underline">Features</a></li>
        <li><a href="#how-it-works" className="animated-underline">How it works</a></li>
        <li><a href="#security" className="animated-underline">Security</a></li>
        <li><a href="#roadmap" className="animated-underline">Roadmap</a></li>
      </ul>
      <a href="#cta" className="nav-cta">Request Access</a>
    </nav>
  );
}
