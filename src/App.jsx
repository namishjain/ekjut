import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Copy,
  HandCoins,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import ekjut1 from './assets/ekjut/WhatsApp Image 2026-11-09 at 20.22.40 (1).jpeg'
import ekjut2 from './assets/ekjut/WhatsApp Image 2026-11-09 at 20.22.40.jpeg'
import ekjut3 from './assets/ekjut/WhatsApp Image 2026-11-09 at 20.22.41 (1).jpeg'
import ekjut4 from './assets/ekjut/WhatsApp Image 2026-11-09 at 20.22.41.jpeg'
import ekjut5 from './assets/ekjut/WhatsApp Image 2026-11-09 at 20.22.42.jpeg'
import './App.css'

const navItems = [
  { label: 'About Us', href: '#about' },
  { label: 'Initiatives / Our Work', href: '#initiatives' },
  { label: 'Donate Us', href: '#donate' },
  { label: 'Contact Us', href: '#contact' },
]

const milestones = [
  { year: '2003', title: 'A hopeful beginning', text: 'Ekjut started with a small group of young people determined to bring out-of-school children back into education.' },
  { year: 'Early years', title: 'Expanding access', text: 'The work began with children who wanted to continue their formal education but lacked support and opportunity.' },
  { year: 'Today', title: 'A broader mission', text: 'Ekjut has grown into a movement addressing child protection, library access, women’s empowerment, and skill development.' },
]

const initiatives = [
  {
    title: 'Ekjut Children Resource Center',
    kicker: 'Child education',
    theme: 'green',
    image: ekjut2,
    summary:
      'Ekjut began by helping children who were not attending school reconnect with formal education and build a future rooted in dignity and opportunity.',
    points: [
      'Bringing out-of-school children into mainstream education.',
      'Supporting children from economically disadvantaged communities.',
      'Offering guidance and encouragement to continue learning with confidence.',
    ],
  },
  {
    title: 'Mobile Library – Aishbagh',
    kicker: 'Reading & learning',
    theme: 'gold',
    image: ekjut3,
    summary:
      'This initiative expands access to learning in slum communities by bringing library experiences, tuition support, and joyful educational engagement to children in Aishbagh and Rahul Nagar.',
    points: [
      'Approximately 250 children have been linked with the initiative.',
      'Library sessions, English tuition, language development, and summer camps.',
      'Exposure visits, Bal Sabha, theatre, and other community-based learning activities.',
    ],
  },
  {
    title: 'Child Protection – Hamidia Hospital',
    kicker: 'Safe spaces',
    theme: 'blue',
    image: ekjut4,
    summary:
      'Ekjut works with children accompanying parents in the hospital by creating a safe, structured, and caring environment where they can learn, play, and participate.',
    points: [
      'Non-formal education activities within Hamidia Hospital.',
      'Hygiene, cleanliness, and health awareness sessions.',
      'Storytelling, drawing, arts and crafts, library access, and theatre-based engagement.',
    ],
  },
  {
    title: 'Skill Based Training Programmes',
    kicker: 'Women’s empowerment',
    theme: 'pink',
    image: ekjut1,
    summary:
      'The organization supports women from slum communities through practical skill-based training that helps build confidence, income pathways, and long-term independence.',
    points: [
      'Vocational and skill-based training for economic independence.',
      'Employment generation and sustainable livelihoods.',
      'Social and economic upliftment for women and their families.',
    ],
  },
  {
    title: 'Formal School – Pathfinder',
    kicker: 'Quality education',
    theme: 'purple',
    image: ekjut5,
    summary:
      'Pathfinder reflects EKJUT’s vision of formal, accessible education for underprivileged children in a supportive and inclusive environment.',
    points: [
      'Inclusive learning designed around children’s needs.',
      'Supportive education that nurtures confidence and growth.',
      'A long-term pathway toward brighter opportunities and holistic development.',
    ],
  },
]

const stats = [
  { label: 'Children supported through educational initiatives', value: '200+' },
  { label: 'Years of community action', value: '20+' },
  { label: 'Women empowered through skill-based training', value: '100+' },
  { label: 'Core focus areas', value: '4' },
]

const bankDetails = [
  ['Organization', 'EKJUT SOCIETY'],
  ['Registration Number', 'IND/6784/13.03.2003'],
  ['Bank', 'State Bank of India'],
  ['Branch', 'Bhopal Main Branch, T.T. Nagar'],
  ['Account Number', '10571048890'],
  ['IFSC', 'SBIN0001308'],
  ['80G exemption', 'Certificate no. AAATE2312F/10/14-15/S-0040/80G, dated 19-10-2015'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const copyBankDetails = async () => {
    const text = bankDetails
      .map(([label, value]) => `${label}: ${value}`)
      .join('\n')

    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch (error) {
      setCopied(false)
      console.error('Unable to copy bank details', error)
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setSubmitted(true)
    form.reset()
  }

  return (
    <div className="ekjut-shell">
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

      <main>
        <section className="hero-section" id="home">
          <div className="page-shell hero-layout">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Social initiative for education and empowerment
              </span>
              <h1>
                Empowering Lives Through <span>Education, Equality &amp; Opportunity.</span>
              </h1>
              <p className="lead">
                Ekjut is a social initiative dedicated to bringing education, protection, and opportunities to underprivileged children and women. Through community-driven programmes, we strive to build a future where everyone has access to knowledge, dignity, and equal opportunities.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#initiatives">
                  Explore Our Work
                  <ArrowRight size={16} />
                </a>
                <a className="button button-secondary" href="#donate">
                  Support Our Mission
                </a>
              </div>
              <div className="hero-meta">
                <span>
                  <MapPin size={16} />
                  Bhopal, Madhya Pradesh
                </span>
                <span>
                  <HeartHandshake size={16} />
                  Community-led change
                </span>
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="hero-image-frame">
                <img src={ekjut2} alt="Children learning together in a community initiative" />
              </div>
              <div className="floating-badge">
                <strong>20+ years</strong>
                <span>of education and community action</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="page-shell">
            <div className="section-header narrow">
              <span className="eyebrow eyebrow-alt">
                <span className="eyebrow-dot" />
                EKJUT / About Us
              </span>
              <h2>
                A Small Beginning. <span>A Bigger Dream.</span>
              </h2>
            </div>

            <div className="about-grid">
              <div className="about-visual">
                <img src={ekjut4} alt="Young learners participating in an EKJUT programme" />
                <div className="photo-pill">Since 2003 • Bhopal</div>
              </div>

              <div className="about-copy">
                <p>
                  EKJUT began in 2003 with a group of young people who wanted to ensure that children who had dropped out of school could continue their education and gain a stronger footing in life.
                </p>
                <p>
                  What started with five enthusiastic children has grown into a wider social initiative focused on education, child protection, mobile libraries, women’s empowerment, and skill development. The organization’s primary objective is to bring out-of-school children in and around Bhopal into the mainstream of education and create real opportunities for them to thrive.
                </p>
                <div className="quote-box">
                  <span>Our philosophy</span>
                  <strong>Empowerment, Knowledge and Justice with Uniformity and Togetherness.</strong>
                </div>
              </div>
            </div>

            <div className="timeline" aria-label="Ekjut journey timeline">
              {milestones.map(({ year, title, text }) => (
                <motion.article
                  className="timeline-item"
                  key={year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45 }}
                >
                  <span className="timeline-year">{year}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section initiatives-section" id="initiatives">
          <div className="page-shell">
            <div className="section-header">
              <span className="eyebrow eyebrow-alt">
                <span className="eyebrow-dot" />
                Initiatives / Our Work
              </span>
              <h2>
                Community-led action for <span>education and dignity.</span>
              </h2>
            </div>

            <div className="initiative-list">
              {initiatives.map(({ title, kicker, theme, image, summary, points }, index) => (
                <motion.article
                  className={`initiative-panel initiative-${theme} ${index % 2 === 1 ? 'initiative-panel--reverse' : ''}`}
                  key={title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                >
                  <div className="initiative-media">
                    <img src={image} alt={title} loading="lazy" />
                  </div>

                  <div className="initiative-content">
                    <span className="initiative-kicker">{kicker}</span>
                    <h3>{title}</h3>
                    <p>{summary}</p>
                    <ul>
                      {points.map((point) => (
                        <li key={point}><Check size={16} /> {point}</li>
                      ))}
                    </ul>
                    <a href="#contact" className="text-link">
                      Learn More
                      <ChevronRight size={15} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section stats-section">
          <div className="page-shell stats-grid">
            {stats.map(({ value, label }) => (
              <div className="stat-card" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section donate-section" id="donate">
          <div className="page-shell donate-grid">
            <motion.div
              className="donate-visual"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <img src={ekjut5} alt="Children and community members engaging in an EKJUT learning activity" />
            </motion.div>

            <motion.div
              className="donate-copy"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow eyebrow-alt">
                <span className="eyebrow-dot" />
                Donate Us
              </span>
              <h2>
                Be a Part of Their Journey. <span>Make a Difference.</span>
              </h2>
              <p>
                Your contribution can help us bring education, opportunities, and a brighter future to children and women who need them most.
              </p>

              <div className="donation-cta">
                <a className="button button-primary" href="#contact">
                  <HandCoins size={16} />
                  Donate Now
                </a>
              </div>

              <div className="bank-card">
                <div className="bank-card-head">
                  <Landmark size={18} />
                  <span>Bank Details</span>
                </div>
                <div className="bank-details" role="table" aria-label="Ekjut bank details">
                  {bankDetails.map(([label, value]) => (
                    <div className="bank-row" key={label} role="row">
                      <span role="cell">{label}</span>
                      <strong role="cell">{value}</strong>
                    </div>
                  ))}
                </div>
                <button type="button" className="copy-button" onClick={copyBankDetails}>
                  <Copy size={15} />
                  {copied ? 'Copied' : 'Copy Account Details'}
                </button>
                <p className="verification-note">
                  Please verify the banking and tax exemption details with the organization before publishing or relying on them for donation decisions.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="page-shell contact-grid">
            <div className="contact-copy">
              <span className="eyebrow eyebrow-alt">
                <span className="eyebrow-dot" />
                Contact Us
              </span>
              <h2>
                Let’s build a more <span>educated and equal future.</span>
              </h2>
              <p>
                We welcome conversations about volunteering, partnerships, donations, and community collaboration.
              </p>

              <div className="contact-list">
                <a href="tel:+919000000000">
                  <Phone size={16} />
                  <span>Phone</span>
                  <strong>+91 00000 00000</strong>
                </a>
                <a href="mailto:hello@ekjut.org">
                  <Mail size={16} />
                  <span>Email</span>
                  <strong>hello@ekjut.org</strong>
                </a>
                <p>
                  <MapPin size={16} />
                  <span>Address</span>
                  <strong>Bhopal, Madhya Pradesh, India</strong>
                </p>
              </div>

              <div className="map-placeholder" aria-label="Map placeholder">
                <span>Location map</span>
                <strong>Bhopal, MP</strong>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-head">
                <span className="contact-icon"><HeartHandshake size={18} /></span>
                <div>
                  <h3>Send us a message</h3>
                  <p>We’d love to hear from you.</p>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="contact-form">
                <label>
                  Name
                  <input type="text" name="name" placeholder="Your full name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
                <label>
                  Subject
                  <input type="text" name="subject" placeholder="How can we help?" required />
                </label>
                <label>
                  Message
                  <textarea name="message" rows="5" placeholder="Write your message here" required />
                </label>

                <button type="submit" className="button button-primary button-full">
                  Send Message
                  <ArrowRight size={16} />
                </button>

                {submitted && (
                  <p className="success-message" role="status">
                    Thanks for your message. This is a frontend-only form and no email has been sent.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

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
            <span>© Yugnext Private Limited 2026. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
