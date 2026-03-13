"use client";
import { useEffect, useRef } from "react";
import { Upload, Lock, Download } from "lucide-react";

export default function DocumentVault() {
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

  const vaultFeatures = [
    {
      Icon: Upload,
      title: "Admin Document Issuance",
      desc: "Upload promotion letters, warning notices, query letters, contracts, and internal notices directly to any employee record.",
    },
    {
      Icon: Lock,
      title: "Immutable Record History",
      desc: "Documents are permanently stored and cannot be altered once issued. A full paper trail for every employment event.",
    },
    {
      Icon: Download,
      title: "Employee Self-Service Access",
      desc: "Employees can view and download their own documents independently — no need to request from HR.",
    },
  ];

  return (
    <section className="section" ref={sectionRef}>
      <div className="vault-grid">
        {/* Left: Visual */}
        <div className="vault-visual reveal">
          <div className="doc-card doc-card-1">
            <div className="doc-type">Promotion Letter</div>
            <div className="doc-name">Senior Software Engineer</div>
            <div className="doc-meta">
              <span>Issued: Jan 15, 2025</span>
              <span>·</span>
              <span>HR Admin</span>
            </div>
            <div className="doc-status">Active</div>
          </div>

          <div className="doc-card doc-card-2">
            <div className="doc-type">Employment Contract</div>
            <div className="doc-name">Full-Time Agreement — 2025</div>
            <div className="doc-meta">
              <span>Issued: Mar 01, 2025</span>
              <span>·</span>
              <span>CEO</span>
            </div>
            <div className="doc-status">Signed</div>
          </div>

          <div className="doc-card doc-card-3">
            <div className="doc-type">Salary Adjustment</div>
            <div className="doc-name">₦180,000 → ₦240,000</div>
            <div className="doc-meta">
              <span>Effective: Feb 01, 2025</span>
              <span>·</span>
              <span>HR Admin</span>
            </div>
            <div className="doc-status">Processed</div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="vault-features">
          <div className="reveal">
            <p className="section-label">Document Vault</p>
            <h2 className="section-title">
              Every document.<br />Permanent. Traceable.
            </h2>
            <p className="section-desc">
              Stop sending HR documents over email. Issue, store, and manage
              every official record in a structured, secure vault — tied directly
              to each employee profile.
            </p>
          </div>

          {vaultFeatures.map(({ Icon, title, desc }, i) => (
            <div
              className="vault-feature-item reveal"
              key={i}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="vault-feature-icon">
                <Icon size={20} strokeWidth={1.5} color="rgba(255,255,255,0.75)" />
              </span>
              <div>
                <div className="vault-feature-title">{title}</div>
                <div className="vault-feature-desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
