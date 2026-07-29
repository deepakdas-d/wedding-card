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
      {/* Fixed background — dried floral border (hidden for dark theme) */}
      {/* <FloralBackground /> */}

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
        <HeroSection showConfetti={onboardingStep === 2} />
        <Countdown />
        
        <div className="card-sequence">
          <NoteForYou />
        </div>
        
        <CeremonyDetails />

        <OurStory />
        
        <FindUs />

        <div className="card-sequence">
          <RSVPForm />
        </div>

        <footer className="wedding-footer">
          <img src="/foral-2.png" alt="Floral decoration" className="wedding-footer__image" />
        </footer>
      </main>
    </>
  )
}

export default App
