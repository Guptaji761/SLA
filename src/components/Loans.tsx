import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, Home, Briefcase, GraduationCap, Car, Tv } from 'lucide-react';

const loans = [
  { id: 6, name: 'Mortgage Loan', icon: Tv },
  { id: 2, name: 'Home Loan', icon: Home },
  { id: 1, name: 'Personal Loan', icon: Wallet },
  { id: 3, name: 'Business Loan', icon: Briefcase },
  { id: 4, name: 'Education Loan', icon: GraduationCap },
  { id: 5, name: 'Vehicle Loan', icon: Car },
];

const mapToDropdownValue = (name: string) => {
  if (name.toLowerCase().includes('gold')) return 'Gold Loan';
  if (name.toLowerCase().includes('car')) return 'Car Loan';
  if (name.toLowerCase().includes('property')) return 'Loan Against Property';
  if (name.toLowerCase().includes('fresh')) return 'Home Loan';
  if (name.toLowerCase().includes('transfer')) return 'Home Loan';
  return name;
};

interface LoansProps {
  onSelectLoan: (type: string) => void;
}

export default function Loans({ onSelectLoan }: LoansProps) {
  const [expandedLoan, setExpandedLoan] = useState<number | null>(null);

  const mortgageSubTypes = [
    "Gold mortgage loan",
    "Car mortgage loan",
    "Property mortgage loan"
  ];

  const homeSubTypes = [
    "Fresh Loan",
    "Balance transfer",
    "Loan Against Property"
  ];

  return (
    <section id="investments" className="py-16 lg:py-24 bg-dark relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-burgundy/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-gold font-bold tracking-widest uppercase mb-4 text-sm flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-gold"></span>
            Financial Portfolio
            <span className="w-8 h-px bg-gold"></span>
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-champagne">Comprehensive Loan Solutions</h2>
          <p className="text-lg text-champagne/70">Customized credit facilities structured to empower your personal aspirations and corporate expansions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {loans.map((loan, index) => {
            const Icon = loan.icon;
            const hasOptions = loan.name === 'Mortgage Loan' || loan.name === 'Home Loan';
            const isExpanded = expandedLoan === loan.id;
            
            return (
              <motion.div
                key={loan.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: isExpanded ? 0 : -5, transition: { duration: 0.2, ease: "easeOut" } }}
                onClick={() => {
                  if (hasOptions) {
                    setExpandedLoan(isExpanded ? null : loan.id);
                  } else {
                    onSelectLoan(mapToDropdownValue(loan.name));
                  }
                }}
                className={`glass-dark p-8 rounded-2xl flex flex-col group border transition-all duration-300 shadow-lg ${isExpanded ? 'border-gold shadow-[0_15px_40px_rgba(212,161,94,0.3)] bg-gold/5 md:scale-[1.02] z-10' : 'border-white/10 hover:border-gold/40 hover:shadow-[0_15px_40px_rgba(212,161,94,0.15)]'} cursor-pointer`}
              >
                {/* Visible Card Content */}
                <div className="flex items-center gap-6 w-full">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gold blur-md opacity-20 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-dark to-burgundy border border-gold/30 flex items-center justify-center shadow-inner">
                      <Icon size={28} className="text-gold group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-champagne mb-1 group-hover:text-gold transition-colors">{loan.name}</h4>
                    {hasOptions && (
                      <p className={`text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-1 mt-1 ${isExpanded ? 'text-gold' : 'text-champagne/50 group-hover:text-champagne/80'}`}>
                        {isExpanded ? 'Close Options' : 'View Options'} {isExpanded ? '↑' : '↓'}
                      </p>
                    )}
                  </div>
                </div>

                {/* Inline Expandable Options Panel (MOBILE ONLY) */}
                <AnimatePresence mode="wait">
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="w-full overflow-hidden block md:hidden"
                    >
                      <div className="pt-6 border-t border-gold/20 flex flex-col gap-3">
                        {(loan.name === 'Mortgage Loan' ? mortgageSubTypes : homeSubTypes).map((type, i) => (
                          <div 
                            key={i} 
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectLoan(mapToDropdownValue(type));
                            }}
                            className="flex items-center gap-4 p-4 rounded-xl bg-dark/50 border border-white/5 hover:border-gold/30 hover:bg-gold/10 transition-colors group/item cursor-pointer"
                          >
                            <div className="w-3 h-3 rounded-full border border-gold/50 group-hover/item:bg-gold shadow-[0_0_8px_rgba(212,161,94,0)] group-hover/item:shadow-[0_0_8px_rgba(212,161,94,1)] transition-all flex-shrink-0"></div>
                            <span className="text-sm font-bold text-champagne/80 group-hover/item:text-gold transition-colors">{type}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
              </motion.div>
            );
          })}
        </div>

        {/* Global Expandable Panel (DESKTOP ONLY) */}
        <AnimatePresence mode="wait">
          {expandedLoan && (
            <motion.div
              key="expanded-panel"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-8 overflow-hidden hidden md:block"
            >
              <div className="glass-dark p-8 md:p-12 rounded-3xl border border-gold/40 shadow-[0_20px_50px_rgba(212,161,94,0.15)] relative bg-dark/80 backdrop-blur-xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-80"></div>
                
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  <div className="max-w-md">
                    <h3 className="text-3xl font-bold text-gold mb-3">
                      {loans.find(l => l.id === expandedLoan)?.name} Options
                    </h3>
                    <p className="text-champagne/70 text-base leading-relaxed">
                      Select one of our specialized financial products tailored specifically to your individual requirements.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-auto flex-1 justify-end">
                    {(loans.find(l => l.id === expandedLoan)?.name === 'Mortgage Loan' ? mortgageSubTypes : homeSubTypes).map((type, i) => (
                      <div 
                        key={i} 
                        onClick={() => onSelectLoan(mapToDropdownValue(type))}
                        className="flex flex-col items-center justify-center p-6 rounded-2xl bg-dark/60 border border-white/5 hover:border-gold/50 hover:bg-gold/10 transition-all cursor-pointer group text-center gap-4"
                      >
                        <div className="w-10 h-10 rounded-full bg-dark flex items-center justify-center border border-gold/30 group-hover:scale-110 transition-transform shadow-inner">
                          <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_12px_rgba(212,161,94,1)]"></span>
                        </div>
                        <span className="text-sm font-bold text-champagne/90 group-hover:text-gold transition-colors">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
