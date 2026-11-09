import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  GraduationCap,
  Heart,
  HeartHandshake,
  Menu,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import image1 from '../externalsrc/1.jpeg'
import image2 from '../externalsrc/2.jpeg'
import image3 from '../externalsrc/3.jpeg'
import image4 from '../externalsrc/4.jpeg'
import image5 from '../externalsrc/5.jpeg'
import image6 from '../externalsrc/6.jpeg'
import image7 from '../externalsrc/7.jpeg'
import image8 from '../externalsrc/8.jpeg'
import './App.css'

const navigation = [
  ['About Us', '#about'],
  ['Our Impact', '#impact'],
  ['What We Do', '#purpose'],
  ['Gallery', '#gallery'],
  ['Transparency', '#transparency'],
  ['Contact', '#contact'],
]

const photos = [image1, image2, image3, image4, image5, image6, image7, image8]

const stats = [
  { value: '350+', label: 'registered students', icon: Users },
  { value: '140–160', label: 'approx. daily attendance', icon: HeartHandshake },
  { value: '10', label: 'dedicated teachers', icon: GraduationCap },
  { value: 'Nursery–VIII', label: 'classes offered', icon: BookOpen },
]

const pillars = [
  {
    number: '01',
    title: 'Education',
    text: 'Accessible English-medium learning that helps children discover what they can do.',
    icon: BookOpen,
  },
  {
    number: '02',
    title: 'Dignity',
    text: 'A caring school community where every child is seen, heard, and encouraged.',
    icon: Heart,
  },
  {
    number: '03',
    title: 'Opportunity',
    text: 'A stronger foundation for children to imagine a future beyond the limits of poverty.',
    icon: Sparkles,
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    setSent(true)
    reset()
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="nav-wrap" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Pathfinder School home">
            <span className="brand-mark">P</span>
            <span className="brand-copy">
              <strong>Pathfinder English Medium School</strong>
              <small>An initiative of Ekjut Society</small>
            </span>
          </a>

          <div className="desktop-nav">
            {navigation.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
            <a className="nav-cta" href="#contact">Support our school <ArrowRight size={15} /></a>
          </div>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="mobile-nav">
            {navigation.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
              Support our school <ArrowRight size={15} />
            </a>
          </div>
        )}
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-layout page-width">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <p className="eyebrow"><span /> An initiative of Ekjut Society</p>
              <h1>Let&apos;s Give<br /><em>Education</em><br />a Purpose.</h1>
              <p className="hero-description">
                A school where children can learn, participate, build confidence, and imagine a future beyond the limits of poverty.
              </p>
              <div className="hero-actions">
                <a className="button button-green" href="#about">Discover our mission <ArrowRight size={17} /></a>
                <a className="button button-outline" href="#contact">Support our school</a>
              </div>
              <div className="hero-location"><span /> BHEL, Govindpura · Bhopal, Madhya Pradesh</div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.12 }}
            >
              <div className="hero-photo hero-photo-main">
                <img src={image2} alt="Pathfinder school children and community" />
              </div>
              <div className="hero-photo hero-photo-small">
                <img src={image5} alt="A moment from the Pathfinder school community" />
              </div>
              <div className="hero-photo hero-photo-stamp">
                <img src={image7} alt="Learning at Pathfinder English Medium School" />
              </div>
              <div className="hero-stat">
                <span className="hero-stat-icon"><Users size={20} /></span>
                <span><strong>350+</strong><small>children registered</small></span>
              </div>
              <span className="hero-scribble" aria-hidden="true">A brighter<br />beginning</span>
            </motion.div>
          </div>
          <a href="#impact" className="scroll-cue" aria-label="Scroll to school impact"><ArrowDown size={16} /></a>
        </section>

        <section className="impact-section" id="impact">
          <div className="page-width">
            <div className="section-heading impact-heading">
              <p className="eyebrow"><span /> A community moving forward</p>
              <h2>Small beginnings.<br /><em>Big possibilities.</em></h2>
            </div>
            <div className="stats-row">
              {stats.map(({ value, label, icon: Icon }, index) => (
                <motion.div
                  className="stat-item"
                  key={label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <span className="stat-icon"><Icon size={20} strokeWidth={1.7} /></span>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="page-width about-grid">
            <div className="about-photo-wrap">
              <img src={image4} alt="Children learning and taking part in school life" />
              <div className="photo-caption"><span>01 / 08</span> Learning, together</div>
              <span className="about-doodle" aria-hidden="true">made with care</span>
            </div>
            <div className="about-copy">
              <p className="eyebrow"><span /> Why Pathfinder?</p>
              <h2>Education, dignity and opportunity <em>for every child.</em></h2>
              <p>
                Pathfinder English Medium School is an initiative of Ekjut Society focused on providing accessible English-medium education to children from underserved communities.
              </p>
              <p>
                We work to create a supportive place where children can learn, participate, build confidence, and prepare for a better future—regardless of the circumstances they were born into.
              </p>
              <a className="text-link" href="#purpose">Explore our purpose <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="purpose-section section-pad" id="purpose">
          <div className="page-width">
            <div className="purpose-intro">
              <p className="eyebrow eyebrow-light"><span /> Our purpose</p>
              <h2>A child&apos;s future should not be <em>decided by poverty.</em></h2>
              <p>We believe education can open doors when it is rooted in care, respect, and possibility.</p>
            </div>
            <div className="pillar-grid">
              {pillars.map(({ number, title, text, icon: Icon }) => (
                <article className="pillar-card" key={title}>
                  <div className="pillar-top"><span>{number}</span><Icon size={22} strokeWidth={1.6} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="learning-section section-pad">
          <div className="page-width learning-grid">
            <div className="learning-copy">
              <p className="eyebrow"><span /> What we do</p>
              <h2>Every day is a chance to <em>grow.</em></h2>
              <p>
                From Nursery through Class VIII, Pathfinder offers English-medium learning in a community that helps children participate, build confidence, and keep looking ahead.
              </p>
              <ul className="learning-list">
                <li><Check size={17} /> Learning from Nursery to Class VIII</li>
                <li><Check size={17} /> Madhya Pradesh Board curriculum</li>
                <li><Check size={17} /> A dedicated team of 10 teachers</li>
              </ul>
              <a className="text-link" href="#contact">Talk with our school <ArrowRight size={16} /></a>
            </div>
            <div className="learning-image">
              <img src={image6} alt="Students taking part in a Pathfinder school activity" />
              <div className="learning-note"><span>Learning with purpose</span><BookOpen size={19} /></div>
            </div>
          </div>
        </section>

        <section className="gallery-section section-pad" id="gallery">
          <div className="page-width">
            <div className="gallery-heading">
              <div>
                <p className="eyebrow"><span /> A glimpse of school life</p>
                <h2>Room to learn.<br /><em>Room to dream.</em></h2>
              </div>
              <p>Real moments from the Pathfinder community.</p>
            </div>
            <div className="gallery-grid">
              {photos.map((photo, index) => (
                <figure className={`gallery-image gallery-image-${index + 1}`} key={photo}>
                  <img src={photo} alt={`Pathfinder school community, moment ${index + 1}`} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="transparency-section section-pad" id="transparency">
          <div className="page-width transparency-grid">
            <div>
              <p className="eyebrow eyebrow-light"><span /> Financial transparency</p>
              <h2>Trust grows when we share <em>what matters.</em></h2>
            </div>
            <div className="transparency-copy">
              <ShieldCheck size={30} strokeWidth={1.5} />
              <p>
                Pathfinder is an initiative of Ekjut Society. For current financial information, donation details, or supporting documents, please contact the school directly. We want every supporter to have clear, accurate information before making a contribution.
              </p>
              <a className="button button-cream" href="mailto:ekjutsociety@gmail.com">Request information <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="page-width contact-grid">
            <div className="contact-copy">
              <p className="eyebrow"><span /> Get in touch</p>
              <h2>Let&apos;s make room for <em>possibility.</em></h2>
              <p>Want to learn more, visit, volunteer, or support the school? We’d be glad to hear from you.</p>
              <div className="contact-details">
                <a href="tel:+919755669119"><span>Phone</span>+91 97556 69119</a>
                <a href="mailto:ekjutsociety@gmail.com"><span>Email</span>ekjutsociety@gmail.com</a>
                <p><span>Find us</span>BHEL, Govindpura, Bhopal, Madhya Pradesh, India</p>
              </div>
            </div>
            <div className="contact-form-card">
              <div className="form-heading">
                <span className="form-mark"><HeartHandshake size={21} /></span>
                <div><h3>Send us a message</h3><p>We’ll follow up using the contact details you share.</p></div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <label>
                  Your name
                  <input {...register('name', { required: 'Please enter your name.' })} placeholder="Name" autoComplete="name" />
                  {errors.name && <span className="field-error">{errors.name.message}</span>}
                </label>
                <label>
                  Email address
                  <input type="email" {...register('email', {
                    required: 'Please enter your email.',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address.' },
                  })} placeholder="you@example.com" autoComplete="email" />
                  {errors.email && <span className="field-error">{errors.email.message}</span>}
                </label>
                <label>
                  How can we help?
                  <textarea {...register('message', { required: 'Please write a short message.' })} rows="4" placeholder="I’d like to know more about…" />
                  {errors.message && <span className="field-error">{errors.message.message}</span>}
                </label>
                {sent && <p className="form-success" role="status">Thanks for reaching out. Please email us directly at ekjutsociety@gmail.com so we can respond to your message.</p>}
                <button className="button button-green" type="submit">Send enquiry <ArrowRight size={16} /></button>
                <p className="form-note">This form does not send data to a server. We’ll show you how to contact us directly after submission.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">P</span>
            <span className="brand-copy"><strong>Pathfinder English Medium School</strong><small>An initiative of Ekjut Society</small></span>
          </a>
          <p>Let&apos;s Give Education a Purpose.</p>
          <a href="#home" className="back-top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
