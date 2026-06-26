import { motion } from 'framer-motion';
import { Phone, Mail, Calendar, MessageCircle, Clock, AlertCircle } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-primary to-burgundy">
      {/* Abstract Background Patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass-dark rounded-3xl p-8 md:p-12 border border-gold/40 shadow-[0_0_50px_rgba(0,0,0,0.5)] gold-glow text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-bold tracking-wider uppercase mb-6"
          >
            <AlertCircle size={16} />
            Limited Consultation Slots Available
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 , ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-bold text-champagne mb-6"
          >
            Book Your Free <span className="text-gold">Financial Consultation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 , ease: [0.22, 1, 0.36, 1] }}
            className="text-champagne/80 text-lg mb-10 max-w-2xl mx-auto flex items-center justify-center gap-2"
          >
            <Clock size={18} className="text-gold" />
            Guaranteed response from our senior advisors within 24 hours.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 , ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* Call Button */}
            <a href="tel:+919892116947" className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/10 border border-white/10 hover:border-gold hover:bg-gold/10 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={24} className="text-gold" />
              </div>
              <span className="text-champagne font-bold">Call Now</span>
            </a>

            {/* WhatsApp Button */}
            <a href="https://wa.me/919892116947" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/10 border border-white/10 hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle size={24} className="text-[#25D366]" />
              </div>
              <span className="text-champagne font-bold">WhatsApp</span>
            </a>

            {/* Email Button */}
            <a href="mailto:shreelaxmiassociates1979@gmail.com" className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/10 border border-white/10 hover:border-gold hover:bg-gold/10 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={24} className="text-gold" />
              </div>
              <span className="text-champagne font-bold">Email Us</span>
            </a>

            {/* Schedule Meeting Button */}
            <button className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-r from-gold to-[#b38342] border border-gold hover:opacity-90 transition-opacity duration-300 group shadow-lg shadow-gold/20">
              <div className="w-12 h-12 rounded-full bg-dark/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calendar size={24} className="text-champagne" />
              </div>
              <span className="text-champagne font-bold">Schedule Meeting</span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
