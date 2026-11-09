export default function Footer({ navItems, initiatives }) {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div className="footer-brand">
          <div className="brand brand-footer">
            <span className="brand-mark">E</span>
            <span className="brand-copy">
              <strong>EKJUT</strong>
              <small>Empowering communities</small>
            </span>
          </div>
          <p>
            Together, We Can Create a More Educated, Equal and Empowered Society.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            {navItems.map(({ label, href }) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Initiatives</h3>
          <ul>
            {initiatives.map(({ title }) => (
              <li key={title}><a href="#initiatives">{title}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li><a href="mailto:hello@ekjut.org">hello@ekjut.org</a></li>
            <li><a href="tel:+919000000000">+91 00000 00000</a></li>
            <li>Bhopal, Madhya Pradesh</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="page-shell">
          <span>© 2026 EKJUT. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
