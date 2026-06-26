import { motion } from 'framer-motion';
import { Eye, Zap, GraduationCap, Lock } from 'lucide-react';

const trustFeatures = [
  {
    icon: Eye,
    title: "Transparent Process",
    description: "Clear communication and ethical financial practices at every step of your journey.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Quick approvals and highly efficient service delivery respecting your valuable time.",
  },
  {
    icon: GraduationCap,
    title: "Expert Guidance",
    description: "Experienced professionals offering strategic advisory and personalized solutions.",
  },
  {
    icon: Lock,
    title: "Secure & Confidential",
    description: "Highest standards of client privacy and bank-grade data protection protocols.",
  }
];

export default function WhyTrustUs() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-dark">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="w-12 h-px bg-gold"></span>
            <h4 className="text-gold font-bold tracking-widest uppercase text-sm">Our Core Pillars</h4>
            <span className="w-12 h-px bg-gold"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 , ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-bold text-champagne mb-6"
          >
            Why Thousands Trust <span className="gold-gradient">Shree Laxmi Associates</span>
          </motion.h2>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] } }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="glass-dark p-8 rounded-2xl border border-gold/10 hover:border-gold/50 transition-colors duration-300 group luxury-shadow min-w-[85vw] snap-center md:min-w-0 md:w-auto"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gold/20">
                  <Icon size={32} className="text-gold drop-shadow-md" />
                </div>
                <h3 className="text-xl font-bold text-champagne mb-4 group-hover:text-gold transition-colors">{feature.title}</h3>
                <p className="text-champagne/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
