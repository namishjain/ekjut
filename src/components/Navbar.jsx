import { ArrowRight, Menu, X } from 'lucide-react'

export default function Navbar({ navItems, menuOpen, setMenuOpen, scrolled }) {
  return (
    <header className={`topbar ${scrolled ? 'topbar--solid' : ''}`}>
      <div className="page-shell topbar-inner">
        <a className="brand" href="#home" aria-label="Ekjut home">
          <span className="brand-mark">E</span>
          <span className="brand-copy">
            <strong>EKJUT</strong>
            <small>Empowering communities</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(({ label, href }) => (
            <a key={label} href={href}>{label}</a>
          ))}
          <a className="nav-cta" href="#donate">
            Donate Now
            <ArrowRight size={15} />
          </a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#donate" onClick={() => setMenuOpen(false)}>
            Donate Now
            <ArrowRight size={15} />
          </a>
        </div>
      )}
    </header>
  )
}
