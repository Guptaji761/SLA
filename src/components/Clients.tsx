import { motion } from 'framer-motion';

const clients = [
  { name: 'Bajaj Finserv', level: 'Platinum Partner' },
  { name: 'Tata Capital', level: 'Strategic Partner' },
  { name: 'HDFC Bank', level: 'Banking Partner' },
  { name: 'Bajaj RBL', level: 'Credit Partner' },
];

export default function Clients() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-dark to-burgundy/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-champagne"
          >
            Trusted By Leading <span className="gold-gradient">Financial Institutions</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 , ease: [0.22, 1, 0.36, 1] }}
            className="inline-block px-6 py-2 rounded-full border border-gold/30 bg-gold/10 gold-glow"
          >
            <p className="text-gold font-bold text-lg">95% Recovery Success Rate</p>
          </motion.div>
        </div>

        {/* Reflective floor effect for the logos */}
        <div className="relative">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.15 , ease: [0.22, 1, 0.36, 1] }}
                className="relative group perspective-1000"
              >
                {/* Floating Card */}
                <div className="glass px-10 py-8 rounded-2xl border border-gold/30 flex flex-col items-center justify-center min-w-[240px] h-[140px] transform transition-transform duration-700 group-hover:rotate-y-12 group-hover:-translate-y-4 shadow-[0_20px_40px_rgba(0,0,0,0.6)] bg-dark/80 backdrop-blur-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="text-2xl font-bold text-champagne group-hover:text-gold transition-colors relative z-10">{client.name}</h3>
                  <span className="text-xs text-champagne/50 mt-3 uppercase tracking-widest font-semibold relative z-10">{client.level}</span>
                </div>
                
                {/* Reflection */}
                <div className="absolute -bottom-[140px] left-0 w-full h-[140px] bg-gradient-to-t from-transparent to-dark/40 opacity-30 transform scale-y-[-1] blur-[2px] pointer-events-none rounded-xl">
                  <div className="px-10 py-8 flex flex-col items-center justify-center w-full h-full">
                    <h3 className="text-2xl font-bold text-champagne">{client.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Floor Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mt-8"></div>
        </div>
      </div>
    </section>
  );
}
