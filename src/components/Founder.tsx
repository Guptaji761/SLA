import { motion } from 'framer-motion';
import { Quote, CheckCircle2 } from 'lucide-react';

export default function Founder() {
  const specializations = [
    "7+ Years Industry Experience",
    "Financial Advisor",
    "Loan Facilitation Expert",
    "Debt Recovery Professional"
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-dark">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Founder Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5 , ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold/30 p-2 glass-dark gold-glow luxury-shadow group">
              <div className="relative rounded-xl overflow-hidden h-[380px] sm:h-[450px] lg:h-[600px] w-full">
                <img 
                  src="/Machhindra.jpg" 
                  alt="Mr. Machhindra Pisal - Founder & MD" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-90"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl border border-gold/40 shiny-effect">
                  <h3 className="text-xl font-bold text-champagne mb-1">Mr. Machhindra Pisal</h3>
                  <p className="text-gold text-sm font-semibold tracking-wider uppercase">Founder & Managing Director</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Founder Message */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.2 , ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-7/12"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-gold"></span>
              <h4 className="text-gold font-bold tracking-widest uppercase text-sm">Message From The Founder</h4>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-champagne leading-tight">
              Building wealth and trust through <span className="gold-gradient">financial excellence.</span>
            </h2>

            <div className="glass-dark p-8 rounded-2xl border border-gold/20 mb-8 relative">
              <Quote className="absolute top-6 right-6 text-gold/20 w-16 h-16 transform rotate-180" />
              <p className="text-lg text-champagne/80 leading-relaxed italic relative z-10">
                "Our mission is to provide transparent, client-first financial solutions that help individuals and businesses grow with confidence. We believe in ethical practices, fast turnarounds, and securing your financial future."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {specializations.map((spec, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} className="text-gold" />
                  </div>
                  <span className="text-champagne/90 font-medium">{spec}</span>
                </div>
              ))}
            </div>

            {/* Signature Area */}
            <div className="flex flex-col gap-2">
              <div className="font-serif text-3xl text-gold opacity-80 mb-2">
                Machhindra Pisal
              </div>
              <div className="w-48 h-[1px] bg-gradient-to-r from-gold/50 to-transparent"></div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
