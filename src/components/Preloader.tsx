import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 1.5 seconds for a snappier experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-dark flex items-center justify-center backdrop-blur-xl"
        >
          <div className="relative flex flex-col items-center">
            {/* Pulsing Logo - Increased Size */}
            <motion.img
              src="/SLA_3.png"
              alt="SLA Logo"
              className="w-56 md:w-80 h-auto drop-shadow-[0_0_30px_rgba(212,161,94,0.5)]"
              animate={{ 
                scale: [0.95, 1.05, 0.95],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            
            {/* Loading Bar */}
            <div className="mt-12 w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gold rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 , ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-gold/80 text-sm tracking-[0.3em] uppercase font-bold"
            >
              Securing Futures
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
