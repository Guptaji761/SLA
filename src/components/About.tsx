import { motion } from 'framer-motion';
import { Building2, Globe2, Network } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about-us" className="py-16 lg:py-24 relative overflow-hidden bg-dark">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-burgundy/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Side: 3D Skyline Placeholder / Glass Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-square relative rounded-3xl overflow-hidden border border-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-burgundy/80 to-dark/50 z-10 mix-blend-overlay"></div>
              <img src="/mumbai-skyline.webp" alt="Mumbai Skyline" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />

              <div className="absolute bottom-8 left-8 right-8 z-20 glass-dark p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gold/20 rounded-lg text-gold">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-champagne">{t('about.hq')}</h4>
                    <p className="text-champagne/60 text-sm">{t('about.location')}</p>
                  </div>
                </div>
                <div className="h-2 w-full bg-dark rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-gold"
                  ></motion.div>
                </div>
                <p className="text-right text-xs text-gold mt-2 font-bold">{t('about.reach')}</p>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 glass-dark p-4 rounded-2xl border border-gold/30 flex items-center gap-4"
            >
              <Globe2 size={32} className="text-gold" />
              <div>
                <p className="text-sm font-bold">{t('about.multilingual')}</p>
                <p className="text-xs text-champagne/60">{t('about.languages')}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-gold font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-4">
              <span className="w-8 h-px bg-gold"></span>
              {t('about.tag')}
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-champagne">{t('about.title')}</h2>

            <p className="text-lg text-champagne/70 mb-6 leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="text-lg text-champagne/70 mb-10 leading-relaxed">
              {t('about.p2')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-dark p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-colors">
                <Network className="text-gold mb-4" size={28} />
                <h4 className="text-xl font-bold mb-2">{t('about.box1.title')}</h4>
                <p className="text-champagne/60 text-sm">{t('about.box1.desc')}</p>
              </div>
              <div className="glass-dark p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-colors">
                <ShieldCheck className="text-gold mb-4" size={28} />
                <h4 className="text-xl font-bold mb-2">{t('about.box2.title')}</h4>
                <p className="text-champagne/60 text-sm">{t('about.box2.desc')}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Quick placeholder for ShieldCheck to avoid missing import
function ShieldCheck(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>;
}
