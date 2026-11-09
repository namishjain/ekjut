import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Initiatives from './components/Initiatives'
import Donation from './components/Donation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { navItems, milestones, initiatives, stats, bankDetails } from './data/initiatives'
import './App.css'

import ekjut2 from './assets/ekjut/WhatsApp Image 2026-11-09 at 20.22.40.jpeg'
import ekjut4 from './assets/ekjut/WhatsApp Image 2026-11-09 at 20.22.41.jpeg'
import ekjut5 from './assets/ekjut/WhatsApp Image 2026-11-09 at 20.22.42.jpeg'

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
      <Navbar navItems={navItems} menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrolled={scrolled} />

      <main>
        <Hero heroImage={ekjut2} />
        <About milestones={milestones} aboutImage={ekjut4} />

        <Initiatives initiatives={initiatives} />

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

        <Donation
          bankDetails={bankDetails}
          copyBankDetails={copyBankDetails}
          copied={copied}
          donateImage={ekjut5}
        />

        <Contact submitted={submitted} handleFormSubmit={handleFormSubmit} />
      </main>

      <Footer navItems={navItems} initiatives={initiatives} />
    </div>
  )
}

export default App
