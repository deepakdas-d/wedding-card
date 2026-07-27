import { useState, useCallback } from 'react'
import EnvelopeOnboarding from './components/EnvelopeOnboarding'
import FloralBackground from './components/FloralBackground'
import SakuraPetals from './components/SakuraPetals'
import HeroSection from './components/HeroSection'
import CeremonyDetails from './components/CeremonyDetails'
import Countdown from './components/Countdown'
import NoteForYou from './components/NoteForYou'
import OurStory from './components/OurStory'
import FindUs from './components/FindUs'
import RSVPForm from './components/RSVPForm'
import './App.css'

function App() {
  // 0 = card animation, 1 = fading out overlay, 2 = main content
  const [onboardingStep, setOnboardingStep] = useState(0)

  const handleCardComplete = useCallback(() => {
    // Start fade-out
    setOnboardingStep(1)
    // After fade-out transition (800ms), remove overlay entirely
    setTimeout(() => setOnboardingStep(2), 850)
  }, [])

  return (
    <>
      {/* Fixed background — dried floral border */}
      <FloralBackground />

      {/* Sakura petal fall animation */}
      <SakuraPetals />

      {/* Onboarding overlay */}
      {onboardingStep < 2 && (
        <EnvelopeOnboarding
          onComplete={handleCardComplete}
          isExiting={onboardingStep === 1}
        />
      )}

      {/* Main wedding content */}
      <main className="wedding-main">
        <div className="card-sequence">
          <HeroSection isActive={onboardingStep >= 1} />
          <CeremonyDetails />
          <Countdown />
          <NoteForYou />
          <OurStory />
          <FindUs />
          <RSVPForm />
        </div>

        <footer className="wedding-footer">
          <p className="wedding-footer__text">
            Made with love — Shahin Shah & Shahala
          </p>
        </footer>
      </main>
    </>
  )
}

export default App
