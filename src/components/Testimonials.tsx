import { motion } from 'framer-motion';
import { Star, ShieldCheck } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Business Owner",
    text: "SLA helped us secure a business loan of ₹2.5 Cr in just 12 days. Their transparency and speed are unmatched in the industry.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=60&fm=webp&w=200&auto=format&fit=crop"
  },
  {
    name: "Anita Desai",
    role: "Homeowner",
    text: "Getting a home loan was completely hassle-free. Their expert guidance at every step gave us total peace of mind.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=60&fm=webp&w=200&auto=format&fit=crop"
  },
  {
    name: "Vikram Mehta",
    role: "Corporate Executive",
    text: "The debt recovery team is highly professional. They recovered funds that we had almost written off. Exceptional service.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=60&fm=webp&w=200&auto=format&fit=crop"
  },
  {
    name: "Priya Patel",
    role: "Entrepreneur",
    text: "I highly recommend Shree Laxmi Associates. Their financial advisory is top-tier and their network is incredibly strong.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=60&fm=webp&w=200&auto=format&fit=crop"
  },
  {
    name: "Sanjay Gupta",
    role: "Director, TechCorp",
    text: "A truly premium banking experience. The level of confidentiality and speed they maintain is exactly what our firm needed.",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=60&fm=webp&w=200&auto=format&fit=crop"
  },
  {
    name: "Neha Singh",
    role: "Real Estate Investor",
    text: "Their structured financing options have been instrumental in scaling my real estate portfolio. Simply the best in Mumbai.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=60&fm=webp&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-dark">
      <div className="container mx-auto px-6 relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="w-12 h-px bg-gold"></span>
            <h4 className="text-gold font-bold tracking-widest uppercase text-sm">Client Testimonials</h4>
            <span className="w-12 h-px bg-gold"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 , ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-bold text-champagne"
          >
            Words From Our <span className="gold-gradient">Esteemed Clients</span>
          </motion.h2>
        </div>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative w-full overflow-hidden flex pb-10">
        {/* Left/Right Gradients for smooth fade out */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-20 pointer-events-none"></div>

        <div className="flex w-max animate-scroll hover:[animation-play-state:paused] gap-6 px-6">
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="w-[400px] glass p-8 rounded-2xl border border-gold/20 flex-shrink-0 relative group"
            >
              <div className="absolute top-6 right-6 flex items-center gap-1 text-gold bg-gold/10 px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={14} />
                Verified
              </div>

              <div className="flex gap-1 text-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-champagne/80 text-lg leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-gold/10 pt-6 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/30 group-hover:border-gold transition-colors">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-champagne font-bold">{testimonial.name}</h4>
                  <p className="text-gold/80 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
