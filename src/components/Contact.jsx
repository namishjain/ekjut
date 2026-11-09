import { ArrowRight, HeartHandshake, Mail, MapPin, Phone } from 'lucide-react'

export default function Contact({ submitted, handleFormSubmit }) {
  return (
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
  )
}
