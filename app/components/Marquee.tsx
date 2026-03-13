export default function Marquee() {
  const items = [
    "Employee Lifecycle Management",
    "Document Vault System",
    "Real-Time Notifications",
    "Salary Audit Trail",
    "Role-Based Access Control",
    "ID Card Generation",
    "Multi-Tenant Architecture",
    "Google 2FA Security",
    "HR Workflow Automation",
    "Employment Record Registry",
  ];

  const doubled = [...items, ...items];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-sep" />
          </span>
        ))}
      </div>
    </div>
  );
}
