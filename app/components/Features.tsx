"use client";
import { useEffect, useRef } from "react";
import {
  User,
  FolderOpen,
  DollarSign,
  Bell,
  Building2,
  ShieldCheck,
  CreditCard,
  ClipboardList,
  Search,
} from "lucide-react";

const features = [
  {
    Icon: User,
    title: "Employee Lifecycle Management",
    desc: "From onboarding to offboarding, manage every stage of the employee journey — profile data, employment details, compensation, and current status.",
  },
  {
    Icon: FolderOpen,
    title: "Document Vault",
    desc: "Issue, store, and retrieve official documents — promotion letters, contracts, warnings, and notices — all tied directly to employee records.",
  },
  {
    Icon: DollarSign,
    title: "Salary Management",
    desc: "Track every salary change with a permanent audit trail. Log previous and new figures, responsible admin, date, and optional justification.",
  },
  {
    Icon: Bell,
    title: "Real-Time Notifications",
    desc: "WebSocket-powered instant alerts keep employees informed about document uploads, role changes, salary updates, and HR announcements.",
  },
  {
    Icon: Building2,
    title: "Organization Management",
    desc: "Multi-tenant architecture ensures every organization operates in full isolation. Seamless company profile setup with custom branding.",
  },
  {
    Icon: ShieldCheck,
    title: "Role-Based Access Control",
    desc: "Define exactly what each team member can see and do. Admin, employee, and upcoming HR Manager and Finance Admin roles ship with fine-grained permissions.",
  },
  {
    Icon: CreditCard,
    title: "ID Card Generation",
    desc: "Generate professional employee ID cards on demand — downloadable as PDF with photo, company logo, role, department, and unique ID.",
  },
  {
    Icon: ClipboardList,
    title: "Audit Logging",
    desc: "Every administrative action is time-stamped and attributed. Full transparency across salary changes, status updates, and document issuance.",
  },
  {
    Icon: Search,
    title: "Employee Directory",
    desc: "A searchable, filterable roster of all employees. Filter by department, role, or status to quickly surface the right person.",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="features" ref={sectionRef}>
      <div className="reveal">
        <p className="section-label">Platform Features</p>
        <h2 className="section-title">
          Everything HR,<br />in one place.
        </h2>
        <p className="section-desc">
          Nine purpose-built modules that bring structure, transparency, and
          control to your organization&apos;s most critical workflows.
        </p>
      </div>

      <div className="feature-grid" style={{ marginTop: "3rem" }}>
        {features.map(({ Icon, title, desc }, i) => (
          <div className="feature-card reveal" key={i} style={{ transitionDelay: `${i * 0.05}s` }}>
            <div className="feature-icon">
              <Icon size={18} strokeWidth={1.5} color="rgba(255,255,255,0.8)" />
            </div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
