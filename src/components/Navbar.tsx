import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about-us' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.investments', href: '#investments' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 px-3 sm:px-4 top-3 sm:top-4`}
      >
        <nav className={`w-full max-w-6xl transition-all duration-500 flex justify-between items-center px-4 sm:px-6 md:px-8 ${scrolled ? 'py-2 sm:py-3 glass-dark rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-gold/30' : 'py-2.5 sm:py-3 bg-dark/80 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none rounded-full border border-gold/20 sm:border-transparent'}`}>
          <div className="flex items-center gap-3">
            <img
              src="/SLA_3.png"
              alt="SLA Logo"
              className={`w-auto drop-shadow-md transition-all duration-500 ${scrolled ? 'h-8 sm:h-10 md:h-11' : 'h-9 sm:h-10 md:h-12'}`}
            />
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
            {navItems.map((item) => (
              <a key={item.key} href={item.href} className="hover:text-gold transition-colors duration-200 ease-out relative group py-2">
                {t(item.key)}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-200 ease-out group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Language Toggle (Visible on Mobile & Desktop) */}
          <div className="flex items-center gap-1 sm:gap-2">
            {(['en', 'mr', 'hi'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`text-xs px-2 py-1 rounded transition-colors uppercase font-semibold ${language === lang
                  ? 'bg-gold text-dark font-bold'
                  : 'text-champagne/80 hover:text-champagne hover:bg-white/10'
                  }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-dark/95 flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-gold hover:text-champagne transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X size={36} />
            </button>

            <div className="flex flex-col items-center gap-8 text-2xl font-bold tracking-wide">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="text-champagne hover:text-gold transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-12 flex items-center gap-4 border-t border-gold/20 pt-8"
            >
              {(['en', 'mr', 'hi'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-sm px-4 py-2 rounded transition-colors uppercase ${language === lang
                    ? 'bg-gold text-dark font-bold'
                    : 'text-champagne/60 hover:text-champagne border border-white/10'
                    }`}
                >
                  {lang}
                </button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
