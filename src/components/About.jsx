import { motion } from 'framer-motion'

export default function About({ milestones, aboutImage }) {
  return (
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
            <img src={aboutImage} alt="Young learners participating in an EKJUT programme" />
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
  )
}
