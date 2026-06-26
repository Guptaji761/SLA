import { motion } from 'framer-motion';
import { ShieldCheck, FileKey, Database, UserCheck, Scale } from 'lucide-react';

const securityFeatures = [
  { title: "RBI Compliant Practices", icon: Scale, desc: "Strict adherence to all regulatory guidelines and ethical standards." },
  { title: "Secure Documentation Process", icon: FileKey, desc: "End-to-end encrypted handling of all sensitive financial documents." },
  { title: "Client Data Protection", icon: Database, desc: "Enterprise-grade data security protocols safeguarding your information." },
  { title: "DRA Certified Agents", icon: UserCheck, desc: "Highly vetted, DRA-certified professionals handling retail and corporate cases." },
  { title: "Professional Recovery Team", icon: ShieldCheck, desc: "Legal and ethical debt recovery maintaining corporate reputation." },
];

export default function SecurityCompliance() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-dark">
      <div className="absolute right-0 bottom-0 w-1/2 h-[500px] bg-gold/5 blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-px bg-gold"></span>
              <h4 className="text-gold font-bold tracking-widest uppercase text-sm">Trust & Security</h4>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-champagne mb-8 leading-tight">
              Uncompromising <span className="gold-gradient">Security & Compliance</span>
            </h2>
            <p className="text-champagne/70 text-lg mb-10 leading-relaxed max-w-xl">
              We operate under the highest standards of financial integrity. Our operations are fully compliant with regulatory bodies, ensuring complete peace of mind for our institutional and banking clients.
            </p>


          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {securityFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx} 
                  className={`glass-dark p-6 rounded-2xl border border-gold/10 hover:border-gold/40 transition-colors ${idx === 4 ? 'sm:col-span-2' : ''}`}
                >
                  <Icon size={28} className="text-gold mb-4" />
                  <h4 className="text-champagne font-bold mb-2 text-lg">{feature.title}</h4>
                  <p className="text-champagne/60 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
