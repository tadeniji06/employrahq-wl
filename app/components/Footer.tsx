export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-brand">
          <div className="nav-logo">
            <span className="nav-logo-dot" />
            EmployraHQ
          </div>
          <p>
            The centralized HR infrastructure platform for modern African
            companies. One platform. Every employee. Total control.
          </p>
        </div>

        <div>
          <p className="footer-col-title">Platform</p>
          <ul className="footer-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How it Works</a></li>
            <li><a href="#security">Security</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
          </ul>
        </div>

        <div>
          <p className="footer-col-title">Product</p>
          <ul className="footer-links">
            <li><a href="#">Employee Management</a></li>
            <li><a href="#">Document Vault</a></li>
            <li><a href="#">Salary Tracking</a></li>
            <li><a href="#">ID Card Generation</a></li>
          </ul>
        </div>

        <div>
          <p className="footer-col-title">Company</p>
          <ul className="footer-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EmployraHQ. All rights reserved.</p>
        <p>HR Infrastructure for Modern Companies.</p>
      </div>
    </footer>
  );
}
