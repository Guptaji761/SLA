import { ShieldCheck, Lock, Send, Shield, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FooterProps {
  selectedLoan: string;
  setSelectedLoan: (loan: string) => void;
  initialMessage: string;
  setInitialMessage: (msg: string) => void;
}

export default function Footer({ selectedLoan, setSelectedLoan, initialMessage, setInitialMessage }: FooterProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    loanType: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (selectedLoan) {
      setFormData(prev => ({ ...prev, loanType: selectedLoan }));
    }
  }, [selectedLoan]);

  useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const formDataObj = new FormData(e.target as HTMLFormElement);
      // Add your Web3Forms Access Key (Passkey) here!
      formDataObj.append("access_key", "e9420c67-ea8b-4379-9476-758988fbc895");

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', loanType: '', message: '' }); // Clear form
        setSelectedLoan('');
        setInitialMessage('');
        setTimeout(() => setStatus('idle'), 5000); // Reset status after 5s
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Submission failed');
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <footer id="contact" className="bg-dark pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-burgundy/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Left Side: Logo and Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/SLA_3.png" alt="SLA Logo" loading="lazy" className="h-16 w-auto drop-shadow-md brightness-150" />
            </div>
            <p className="text-champagne/60 max-w-sm mb-8 leading-relaxed">
              Your premium partner in wealth management, strategic financial advisory, and professional debt recovery across Mumbai.
            </p>
            
            <div className="mb-8">
              <h4 className="text-gold font-bold uppercase tracking-wider mb-4 text-sm">Contact Info</h4>
              <ul className="space-y-3 text-champagne/70">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">📍</span>
                  Mumbai
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold">📞</span>
                  9892116947
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold">✉️</span>
                  shreelaxmiassociates1979@gmail.com
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-champagne transition-colors cursor-pointer">
                in
              </div>
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-champagne transition-colors cursor-pointer">
                tw
              </div>
            </div>

            {/* Zero Tracking Privacy Badge */}
            <div className="mt-8 border border-white/10 bg-white/5 rounded-xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-dark/50 border border-white/10 rounded-lg text-gold">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Zero-Tracking Privacy Policy</h4>
                  <p className="text-sm text-champagne/70 leading-relaxed">
                    We respect institutional security. This website uses absolutely no third-party tracking cookies, analytics pixels, or data collection scripts. Your visit is 100% private.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side: Contact Form */}
          <div className="glass-dark p-8 rounded-3xl border border-white/5 shadow-lg max-w-xl">
            <h4 className="text-2xl font-bold text-champagne mb-2">Request a Call Back</h4>
            <p className="text-champagne/60 mb-6 text-sm">Leave your details and we'll reach out to you shortly.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="subject" value="New Contact Request from SLA Website" />
              <input type="hidden" name="from_name" value="SLA Corporate Website" />
              
              {/* Web3Forms Honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    id="contact-name"
                    name="name" 
                    autoComplete="name"
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-champagne text-sm focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    id="contact-phone"
                    name="phone" 
                    autoComplete="tel"
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-champagne text-sm focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div>
                <input 
                  type="email" 
                  id="contact-email"
                  name="email" 
                  autoComplete="email"
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-champagne text-sm focus:outline-none focus:border-gold/50 transition-colors"
                  placeholder="Email Address"
                />
              </div>

              <div className="relative">
                <select 
                  name="loanType" 
                  required 
                  value={formData.loanType}
                  onChange={handleChange}
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-champagne text-sm focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer pr-10"
                >
                  <option value="" disabled className="bg-dark text-champagne/40">Enquiry Regarding</option>
                  <option value="Home Loan" className="bg-dark text-champagne">Home Loan</option>
                  <option value="Personal Loan" className="bg-dark text-champagne">Personal Loan</option>
                  <option value="Business Loan" className="bg-dark text-champagne">Business Loan</option>
                  <option value="Education Loan" className="bg-dark text-champagne">Education Loan</option>
                  <option value="Vehicle Loan" className="bg-dark text-champagne">Vehicle Loan</option>
                  <option value="Gold Loan" className="bg-dark text-champagne">Gold Loan</option>
                  <option value="Loan Against Property" className="bg-dark text-champagne">Loan Against Property</option>
                  <option value="Mortgage Loan" className="bg-dark text-champagne">Mortgage Loan</option>
                  <option value="Car Loan" className="bg-dark text-champagne">Car Loan</option>
                  <option value="Other Loan / Enquiry" className="bg-dark text-champagne">Other Loan / Enquiry</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
                  <ChevronDown size={18} />
                </div>
              </div>

              <div>
                <textarea 
                  name="message" 
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-champagne text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
                  placeholder="Your Message..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all text-sm ${
                  status === 'success' 
                    ? 'bg-green-500 text-white' 
                    : status === 'error' 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gradient-to-r from-gold to-primary text-dark hover:shadow-[0_0_15px_rgba(212,161,94,0.3)]'
                } ${status === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
              >
                {status === 'submitting' ? (
                  'Sending Enquiry...'
                ) : status === 'success' ? (
                  'Message Sent Successfully!'
                ) : status === 'error' ? (
                  errorMessage || 'Error occurred!'
                ) : (
                  <>
                    <Send size={16} />
                    Submit Enquiry
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Security Trust Bar */}
        <div className="py-8 border-t border-b border-gold/10 flex flex-wrap justify-center items-center gap-12 mb-8">
          <div className="flex items-center gap-3 text-champagne/80 font-semibold text-sm">
            <ShieldCheck className="text-gold" size={20} />
            RBI Compliant
          </div>
          <div className="flex items-center gap-3 text-champagne/80 font-semibold text-sm">
            <Lock className="text-gold" size={20} />
            Bank Grade Security
          </div>
        </div>

        <div className="text-center text-champagne/40 text-sm">
          &copy; {new Date().getFullYear()} Shree Laxmi Associates. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
