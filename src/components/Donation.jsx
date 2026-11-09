import { motion } from 'framer-motion'
import { Copy, HandCoins, Landmark } from 'lucide-react'

export default function Donation({ bankDetails, copyBankDetails, copied, donateImage }) {
  return (
    <section className="section donate-section" id="donate">
      <div className="page-shell donate-grid">
        <motion.div
          className="donate-visual"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <img src={donateImage} alt="Children and community members engaging in an EKJUT learning activity" />
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
  )
}
