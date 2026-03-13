"use client";
import { useEffect, useRef } from "react";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-section" id="cta" ref={sectionRef}>
      <div className="cta-glow" />
      <div className="cta-inner">
        <div className="reveal">
          <div className="hero-badge" style={{ margin: "0 auto 2rem" }}>
            <span className="hero-badge-dot" />
            Built for Africa&apos;s Next Generation of Companies
          </div>
          <h2 className="cta-title">
            Ready to transform<br />how you run HR?
          </h2>
          <p className="cta-sub">
            Join forward-thinking organizations replacing spreadsheets and
            fragmented tools with structured, digital HR infrastructure.
          </p>
          <div className="cta-actions">
            <a href="#" className="btn-primary">Request Early Access</a>
            <a href="mailto:tadeniji06@gmail.com" className="btn-secondary">
              Talk to the team
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
