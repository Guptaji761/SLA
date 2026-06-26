import { Home, Briefcase, Info, Phone } from 'lucide-react';

export default function MobileNav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-[90] bg-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] px-6 py-3 flex justify-between items-center">
      <button 
        onClick={() => scrollToSection('home')}
        className="flex flex-col items-center gap-1 text-champagne/70 hover:text-gold transition-colors"
      >
        <Home size={20} />
        <span className="text-[10px] font-medium uppercase tracking-wider">Home</span>
      </button>

      <button 
        onClick={() => scrollToSection('services')}
        className="flex flex-col items-center gap-1 text-champagne/70 hover:text-gold transition-colors"
      >
        <Briefcase size={20} />
        <span className="text-[10px] font-medium uppercase tracking-wider">Services</span>
      </button>

      <button 
        onClick={() => scrollToSection('about-us')}
        className="flex flex-col items-center gap-1 text-champagne/70 hover:text-gold transition-colors"
      >
        <Info size={20} />
        <span className="text-[10px] font-medium uppercase tracking-wider">About</span>
      </button>

      <button 
        onClick={() => scrollToSection('contact')}
        className="flex flex-col items-center gap-1 text-champagne/70 hover:text-gold transition-colors"
      >
        <Phone size={20} />
        <span className="text-[10px] font-medium uppercase tracking-wider">Contact</span>
      </button>
    </div>
  );
}
