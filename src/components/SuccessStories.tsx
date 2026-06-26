import { motion } from 'framer-motion';
import { Briefcase, Building, Home, TrendingUp, Clock, CheckCircle, Target } from 'lucide-react';

const cases = [
  {
    type: "Business Loan Success",
    icon: Briefcase,
    amountLabel: "Approved",
    amount: "₹2.5 Crore",
    metrics: [
      { label: "Industry", value: "Manufacturing", icon: Building },
      { label: "Timeline", value: "12 Days", icon: Clock },
      { label: "Outcome", value: "Business Expansion Achieved", icon: TrendingUp }
    ],
    color: "from-blue-500/20 to-transparent",
    iconColor: "text-blue-400"
  },
  {
    type: "Debt Recovery Success",
    icon: Target,
    amountLabel: "Recovered",
    amount: "₹48 Lakhs",
    metrics: [
      { label: "Timeline", value: "45 Days", icon: Clock },
      { label: "Result", value: "Successful Recovery", icon: CheckCircle }
    ],
    color: "from-green-500/20 to-transparent",
    iconColor: "text-green-400"
  },
  {
    type: "Home Loan Approval",
    icon: Home,
    amountLabel: "Approved",
    amount: "₹75 Lakhs",
    metrics: [
      { label: "Timeline", value: "7 Days", icon: Clock },
      { label: "Outcome", value: "Dream Home Purchased", icon: CheckCircle }
    ],
    color: "from-gold/20 to-transparent",
    iconColor: "text-gold"
  }
];

export default function SuccessStories() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-dark">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="w-12 h-px bg-gold"></span>
              <h4 className="text-gold font-bold tracking-widest uppercase text-sm">Track Record</h4>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 , ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-5xl font-bold text-champagne"
            >
              Client <span className="gold-gradient">Success Stories</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => {
            const MainIcon = caseStudy.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: index * 0.1 , ease: [0.22, 1, 0.36, 1] }}
                className="glass-dark rounded-3xl overflow-hidden border border-gold/20 group hover:border-gold/50 transition-colors luxury-shadow relative"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${caseStudy.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                
                <div className="p-8 relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-bold text-champagne/80 uppercase tracking-wider">
                      {caseStudy.type}
                    </div>
                    <MainIcon size={24} className={caseStudy.iconColor} />
                  </div>

                  <div className="mb-8">
                    <p className="text-champagne/60 text-sm font-medium uppercase tracking-widest mb-1">{caseStudy.amountLabel}</p>
                    <h3 className="text-4xl font-bold text-champagne">{caseStudy.amount}</h3>
                  </div>

                  <div className="space-y-4">
                    {caseStudy.metrics.map((metric, idx) => {
                      const MetricIcon = metric.icon;
                      return (
                        <div key={idx} className="flex items-center gap-4 bg-dark/40 p-4 rounded-xl border border-white/10">
                          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                            <MetricIcon size={18} className="text-gold" />
                          </div>
                          <div>
                            <p className="text-xs text-champagne/50 uppercase font-bold tracking-wider mb-0.5">{metric.label}</p>
                            <p className="text-champagne font-medium">{metric.value}</p>
                          </div>
                        </div>
                      );
                    })}
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
