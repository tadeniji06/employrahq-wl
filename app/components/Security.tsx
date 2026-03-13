"use client";
import { useEffect, useRef } from "react";

const securityFeatures = [
  {
    tag: "Authentication",
    title: "JWT Token Architecture",
    desc: "Access tokens with automatic expiration paired with rotating refresh tokens. Sessions are revoked instantly upon logout or suspicious activity.",
  },
  {
    tag: "Multi-Factor Auth",
    title: "Google 2FA for Critical Actions",
    desc: "Salary updates, employee termination, and organization-level changes require Google Two-Factor Authentication — protecting your most sensitive operations.",
  },
  {
    tag: "Data Isolation",
    title: "Multi-Tenant Segregation",
    desc: "Every organization operates within a fully isolated environment. No cross-tenant data access is architecturally possible.",
  },
  {
    tag: "Access Control",
    title: "Role-Based Permissions",
    desc: "Granular permissions ensure employees can only access their own data, while admins have full organizational control with action logging.",
  },
  {
    tag: "Audit Trail",
    title: "Immutable Action Logs",
    desc: "Every administrative action — from salary changes to document issuance — is permanently logged with actor, timestamp, and affected parties.",
  },
  {
    tag: "Scalability",
    title: "Enterprise-Ready Foundation",
    desc: "Built to support thousands of employees and multiple organizations simultaneously, with real-time WebSocket communications and cloud-native storage.",
  },
];

const roles = [
  { name: "Admin", manage: true, invite: true, salary: true, docs: true, terminate: true },
  { name: "Employee", manage: false, invite: false, salary: false, docs: true, terminate: false },
  { name: "HR Manager (Soon)", manage: true, invite: true, salary: false, docs: true, terminate: false },
  { name: "Finance Admin (Soon)", manage: false, invite: false, salary: true, docs: false, terminate: false },
];

export default function Security() {
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
    <section className="section" id="security" ref={sectionRef}>
      <div className="reveal">
        <p className="section-label">Security & Access</p>
        <h2 className="section-title">
          Built with enterprise<br />security at its core.
        </h2>
        <p className="section-desc">
          HR data is among the most sensitive in any organization. EmployraHQ
          enforces security at every layer — from authentication to data isolation.
        </p>
      </div>

      <div className="security-grid reveal">
        {securityFeatures.map((s, i) => (
          <div className="security-card" key={i}>
            <span className="security-tag">{s.tag}</span>
            <h3 className="security-title">{s.title}</h3>
            <p className="security-desc">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Role Permission Table */}
      <div style={{ marginTop: "5rem" }} className="reveal">
        <p className="section-label">Role Permissions</p>
        <h3 className="section-title" style={{ fontSize: "1.6rem" }}>Who can do what.</h3>
        <table className="roles-table" style={{ marginTop: "1.5rem" }}>
          <thead>
            <tr>
              <th>Role</th>
              <th>Manage Employees</th>
              <th>Invite Users</th>
              <th>Update Salary</th>
              <th>Access Documents</th>
              <th>Terminate</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((r, i) => (
              <tr key={i}>
                <td><span className="role-name">{r.name}</span></td>
                <td><span className={r.manage ? "check" : "dash"}>{r.manage ? "✓" : "—"}</span></td>
                <td><span className={r.invite ? "check" : "dash"}>{r.invite ? "✓" : "—"}</span></td>
                <td><span className={r.salary ? "check" : "dash"}>{r.salary ? "✓" : "—"}</span></td>
                <td><span className={r.docs ? "check" : "dash"}>{r.docs ? "✓" : "—"}</span></td>
                <td><span className={r.terminate ? "check" : "dash"}>{r.terminate ? "✓" : "—"}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
