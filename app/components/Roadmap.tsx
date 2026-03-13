"use client";
import { useEffect, useRef } from "react";
import {
  Banknote,
  CalendarDays,
  Star,
  Monitor,
  Megaphone,
  BarChart3,
} from "lucide-react";

const upcoming = [
  {
    Icon: Banknote,
    title: "Payroll Automation",
    desc: "Automated salary distribution and real-time payroll reporting built directly into the compensation module.",
    tag: "Q2 2025",
  },
  {
    Icon: CalendarDays,
    title: "Leave Management",
    desc: "Employees request leave, managers approve or decline, and records are automatically maintained.",
    tag: "Q2 2025",
  },
  {
    Icon: Star,
    title: "Performance Reviews",
    desc: "Structured evaluation workflows with peer reviews, self-assessments, and historical performance tracking.",
    tag: "Q3 2025",
  },
  {
    Icon: Monitor,
    title: "Asset Management",
    desc: "Track company assets assigned to employees — laptops, phones, access cards — with full lifecycle records.",
    tag: "Q3 2025",
  },
  {
    Icon: Megaphone,
    title: "Internal Announcements",
    desc: "Company-wide communications sent directly from HR, visible organization-wide in real time.",
    tag: "Q4 2025",
  },
  {
    Icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Headcount trends, salary distributions, turnover rates, and department breakdowns — visual and exportable.",
    tag: "Q4 2025",
  },
];

export default function Roadmap() {
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
    <section className="section" id="roadmap" ref={sectionRef}>
      <div className="reveal">
        <p className="section-label">Roadmap</p>
        <h2 className="section-title">
          What&apos;s coming<br />next.
        </h2>
        <p className="section-desc">
          EmployraHQ is on a mission to become the default HR infrastructure
          for African companies. Here&apos;s what we&apos;re building next.
        </p>
      </div>

      <div className="future-grid">
        {upcoming.map(({ Icon, title, desc, tag }, i) => (
          <div
            className="future-card reveal"
            key={i}
            style={{ transitionDelay: `${i * 0.06}s` }}
          >
            <div className="future-icon">
              <Icon size={22} strokeWidth={1.5} color="rgba(255,255,255,0.7)" />
            </div>
            <div className="future-title">{title}</div>
            <div className="future-desc">{desc}</div>
            <span className="future-tag">{tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
