"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      hero.style.setProperty("--mouse-x", `${x}`);
      hero.style.setProperty("--mouse-y", `${y}`);
    };
    hero.addEventListener("mousemove", onMouseMove);
    return () => hero.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="hero-badge">
        <span className="hero-badge-dot" />
        HR Infrastructure · Built for African Enterprises
      </div>

      <h1 className="hero-title">
        The Operating System<br />
        <span>for Your People</span>
      </h1>

      <p className="hero-sub">
        EmployraHQ replaces spreadsheets, scattered records, and fragmented
        HR tools with a single, secure, and structured platform.
      </p>

      <div className="hero-actions">
        <a href="#cta" className="btn-primary">Get Started Free</a>
        <a href="#how-it-works" className="btn-secondary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
          </svg>
          See how it works
        </a>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-number">∞</span>
          <span className="stat-label">Employees Supported</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Data Isolated</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">Real-Time</span>
          <span className="stat-label">Notifications</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">2FA</span>
          <span className="stat-label">Admin Security</span>
        </div>
      </div>
    </section>
  );
}
