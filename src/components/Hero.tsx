import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero3D = lazy(() => import('./Hero3D'));

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-dark">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-burgundy/40 via-dark to-dark z-0"></div>

      {/* 3D Background Elements */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>
      </div>

      <div className="container relative z-10 mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-champagne drop-shadow-2xl">
            {t('hero.title1')}<br />
            <span className="gold-gradient">{t('hero.title2')}</span>
          </h1>
          <p className="text-lg md:text-xl text-champagne/80 mb-10 leading-relaxed font-light">
            {t('hero.subtitle')}
          </p>



          <div className="glass-dark rounded-3xl md:rounded-full px-4 md:px-8 py-4 inline-flex flex-wrap items-center justify-center gap-3 md:gap-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-gold/20">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Shield size={16} className="text-gold" />
              <span>{t('hero.tag.trust')}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gold/50"></div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <TrendingUp size={16} className="text-gold" />
              <span>{t('hero.tag.secure')}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gold/50"></div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Users size={16} className="text-gold" />
              <span>{t('hero.tag.client')}</span>
            </div>
          </div>
        </motion.div>

        {/* Right 2.5D Image floating over 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex justify-center items-center mt-8 lg:mt-0"
        >
          <motion.img
            src="/SLA_3.png"
            alt="SLA 3D Logo"
            className="w-4/5 sm:w-full max-w-[900px] lg:scale-125 drop-shadow-[0_20px_50px_rgba(212,161,94,0.3)] object-contain"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
