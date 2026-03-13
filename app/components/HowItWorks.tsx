"use client";
import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Create your organization",
    desc: "Set up your isolated HR environment in minutes. Configure your company profile, upload your logo, set your industry and timezone — your single source of truth is live.",
    tag: "Onboarding",
  },
  {
    num: "02",
    title: "Invite your team",
    desc: "Send invitation links directly to employees. They complete signup, and their structured profile is instantly created within your organization's environment.",
    tag: "Team Setup",
  },
  {
    num: "03",
    title: "Manage the full employee lifecycle",
    desc: "Update roles, departments, salaries, and statuses. Every change is logged with a timestamp, responsible admin, and optional supporting documentation.",
    tag: "HR Operations",
  },
  {
    num: "04",
    title: "Issue and store official documents",
    desc: "Generate promotion letters, contracts, warnings, and notices from the Document Vault. Employees receive real-time notifications and can download their documents anytime.",
    tag: "Document Management",
  },
  {
    num: "05",
    title: "Monitor everything in real time",
    desc: "WebSocket-powered updates keep the entire organization informed instantly. Audit logs ensure full accountability for every administrative action taken.",
    tag: "Transparency",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="how-it-works" ref={sectionRef}>
      <div className="reveal">
        <p className="section-label">How it Works</p>
        <h2 className="section-title">
          From setup to scale,<br />in five steps.
        </h2>
        <p className="section-desc">
          EmployraHQ is designed to be operational from day one. No lengthy onboarding.
          No consultants. Just structure where chaos used to live.
        </p>
      </div>

      <div className="steps-container">
        {steps.map((s, i) => (
          <div className="step reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="step-number">{s.num}</div>
            <div className="step-content">
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
            <div className="step-tag">{s.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
