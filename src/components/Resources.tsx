import { motion } from 'framer-motion';
import { Calculator, FileText, PieChart, Download } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: 'EMI Calculator',
    description: 'Instantly calculate your monthly loan installments with our advanced interactive tool.',
    icon: Calculator,
    tag: 'Tool'
  },
  {
    id: 2,
    title: 'Tax Planning Guide 2026',
    description: 'Download our comprehensive guide to maximizing your tax savings under the new regimes.',
    icon: Download,
    tag: 'PDF Guide'
  },
  {
    id: 3,
    title: 'Market Insights Q2',
    description: 'Expert analysis on current market trends, real estate valuation, and investment opportunities.',
    icon: PieChart,
    tag: 'Report'
  },
  {
    id: 4,
    title: 'Loan Documentation',
    description: 'A complete checklist of KYC and financial documents required for fast loan processing.',
    icon: FileText,
    tag: 'Checklist'
  }
];

export default function Resources() {
  return (
    <section id="resources" className="py-16 lg:py-24 bg-gradient-to-b from-burgundy/10 to-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-gold font-bold tracking-widest uppercase mb-4 text-sm">Knowledge Base</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-champagne">Premium Resources</h2>
          </div>
          <button className="text-gold border-b-2 border-gold pb-1 font-semibold hover:text-champagne hover:border-champagne transition-colors">
            View All Resources →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: index * 0.1 , ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10 }}
                className="glass-dark p-8 rounded-2xl border border-white/10 hover:border-gold/30 group transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-gold group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-bold bg-dark px-3 py-1 rounded-full text-gold border border-gold/20">
                    {resource.tag}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-champagne mb-3 group-hover:text-gold transition-colors">{resource.title}</h3>
                <p className="text-champagne/60 text-sm leading-relaxed flex-grow">
                  {resource.description}
                </p>
                
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-sm font-bold text-champagne/50 group-hover:text-gold transition-colors">
                  Access Now <span className="text-lg leading-none">›</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
