import { motion } from 'framer-motion'
import { ArrowRight, HeartHandshake, MapPin } from 'lucide-react'

export default function Hero({ heroImage }) {
  return (
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
            <img src={heroImage} alt="Children learning together in a community initiative" />
          </div>
          <div className="floating-badge">
            <strong>20+ years</strong>
            <span>of education and community action</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
