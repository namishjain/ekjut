import { motion } from 'framer-motion'
import { Check, ChevronRight } from 'lucide-react'

export default function Initiatives({ initiatives }) {
  return (
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
          {initiatives.map(({ title, kicker, theme, image, summary, points, ctaLabel = 'Learn More', ctaHref = '#contact' }, index) => (
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
                <a href={ctaHref} className="text-link">
                  {ctaLabel}
                  <ChevronRight size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
