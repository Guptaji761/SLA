import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, Target, Building2 } from 'lucide-react';
import gsap from 'gsap';

const statData = [
  { id: 1, number: 15000, suffix: '+', label: 'Cases Solved', icon: Users },
  { id: 3, number: 3, suffix: '+', label: 'Years Combined Team Experience', icon: Award },
  { id: 4, number: 95, suffix: '%', label: 'Success Rate', icon: Target },
  { id: 5, number: 10, suffix: '+', label: 'Corporate Relationships', icon: Building2 },
];

function Counter({ from = 0, to, duration = 2.5, prefix = '', suffix = '' }: { from?: number, to: number, duration?: number, prefix?: string, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || !nodeRef.current) return;
    
    const node = nodeRef.current;
    
    gsap.fromTo(node, 
      { innerHTML: from },
      {
        innerHTML: to,
        duration,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        onUpdate: function() {
          node.innerHTML = prefix + Math.round(Number(this.targets()[0].innerHTML)).toLocaleString('en-IN') + suffix;
        }
      }
    );
  }, [isInView, from, to, duration, prefix, suffix]);

  return <span ref={nodeRef} className="text-3xl lg:text-4xl font-bold text-champagne">{prefix}0{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-8 lg:py-12 relative z-20 -mt-10 lg:-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 md:flex-wrap md:justify-center md:gap-10 md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {statData.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.1 , ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10 }}
                className="glass-dark p-6 lg:p-10 rounded-2xl flex flex-col items-center text-center group border-t border-gold/30 hover:border-gold transition-colors duration-300 flex-none min-w-[75vw] snap-center md:flex-1 md:min-w-[260px] lg:max-w-[350px] luxury-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/40 transition-colors">
                  <Icon size={28} className="text-gold" />
                </div>
                <Counter to={stat.number} suffix={stat.suffix} />
                <p className="text-champagne/70 mt-2 font-medium tracking-wide uppercase text-xs">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
