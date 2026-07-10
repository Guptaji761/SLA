import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LanguageProvider } from './context/LanguageContext';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Founder from './components/Founder';
import WhyTrustUs from './components/WhyTrustUs';
import Services from './components/Services';
import Loans from './components/Loans';

import SecurityCompliance from './components/SecurityCompliance';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import CallbackWidget from './components/CallbackWidget';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [selectedLoan, setSelectedLoan] = useState<string>('');
  const [initialMessage, setInitialMessage] = useState<string>('');

  useEffect(() => {
    // Content Protection (Deterrence)
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleDragStart = (e: DragEvent) => e.preventDefault();

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);

    const lenis = new Lenis({
      lerp: 0.07, // Much smoother and responsive than duration-based
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-dark text-champagne min-h-screen font-sans selection:bg-primary selection:text-white">
        <Preloader />
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Founder />
        <WhyTrustUs />
        <Services onSelectService={(serviceTitle) => {
          setInitialMessage(`Hello, I would like to enquire about your ${serviceTitle} services.`);
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }} />
        <Loans onSelectLoan={(type: string) => {
          setSelectedLoan(type);
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }} />
        <SecurityCompliance />

        <Footer 
          selectedLoan={selectedLoan} 
          setSelectedLoan={setSelectedLoan} 
          initialMessage={initialMessage}
          setInitialMessage={setInitialMessage}
        />
        <MobileNav />
        <CallbackWidget />
      </div>
    </LanguageProvider>
  );
}
