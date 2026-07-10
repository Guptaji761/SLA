import { motion } from 'framer-motion';
import { Landmark, Lock, ShieldAlert, FileCheck } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Debt Recovery',
    description: 'Professional extrajudicial (soft) and legal collection services to minimize your NPA portfolio on a contingency basis.',
    icon: ShieldAlert,
    color: 'from-red-900/50 to-red-500/20'
  },
  {
    id: 2,
    title: 'Field Verification',
    description: 'Comprehensive background, address, and field verification for corporate banking and leading finance institutions.',
    icon: FileCheck,
    color: 'from-purple-900/50 to-purple-500/20'
  },
  {
    id: 3,
    title: 'Loan Sourcing',
    description: 'End-to-end facilitation for retail and corporate lending portfolios tailored to institutional lending targets.',
    icon: Landmark,
    color: 'from-blue-900/50 to-blue-500/20'
  },
  {
    id: 4,
    title: 'Data Compliance',
    description: 'Bank-grade encrypted handling of sensitive financial documents and strict adherence to RBI privacy guidelines.',
    icon: Lock,
    color: 'from-green-900/50 to-green-500/20'
  }
];

interface ServicesProps {
  onSelectService: (title: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-16 lg:py-24 bg-dark relative">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-burgundy/5 blur-[150px] pointer-events-none"></div>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-gold font-bold tracking-widest uppercase mb-4 text-sm">Corporate Operations</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-champagne">Institutional Services</h2>
          <p className="text-lg text-champagne/70">Backend operational solutions designed with strict compliance and efficiency for top-tier financial institutions.</p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } }}
                onClick={() => onSelectService(service.title)}
                className="glass relative overflow-hidden rounded-2xl p-8 group border-t border-gold/20 hover:border-gold/60 transition-colors duration-300 cursor-pointer min-w-[85vw] snap-center md:min-w-0 md:w-auto"
              >
                {/* Background Glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-dark/80 rounded-xl flex items-center justify-center mb-6 border border-gold/30 group-hover:bg-primary transition-colors duration-500 shadow-[0_0_15px_rgba(212,161,94,0.2)]">
                    <Icon size={28} className="text-gold group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-champagne">{service.title}</h3>
                  <p className="text-champagne/60 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-gold text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                    Learn More <span className="ml-2">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
