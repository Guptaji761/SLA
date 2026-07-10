import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CallbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 8) return;

    const message = `Hello Shree Laxmi Associates, please call me back urgently within 15 minutes at my phone number: ${phone}`;
    const whatsappUrl = `https://wa.me/919892116947?text=${encodeURIComponent(message)}`;

    // Open WhatsApp alert directly to +919892116947
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setPhone('');
    }, 6000);
  };

  return (
    <>
      {/* Floating Trigger Button on Right Edge */}
      <div className="fixed right-4 bottom-20 sm:bottom-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 bg-gradient-to-r from-primary to-burgundy border border-gold/40 hover:border-gold px-4 py-2.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.7)] text-white hover:scale-105 transition-all duration-300"
          aria-label="Request 15-Minute Callback"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-ping"></div>
          <PhoneCall size={16} className="text-gold group-hover:rotate-12 transition-transform" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-champagne">15-Min Callback</span>
        </button>
      </div>

      {/* Slide-out Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:justify-end p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full max-w-md bg-dark/95 border border-gold/40 rounded-3xl p-6 sm:p-7 shadow-2xl relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-champagne/60 hover:text-white transition-colors"
                aria-label="Close Callback Modal"
              >
                <X size={20} />
              </button>

              {!submitted ? (
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-gold/20 text-gold text-[11px] font-bold tracking-wider uppercase">
                      Executive Priority
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Request Instant Callback
                  </h3>
                  <p className="text-sm text-champagne/80 mb-6 leading-relaxed">
                    Leave your phone number below and our institutional advisor will call your office within 15 minutes.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gold tracking-wider uppercase mb-1.5">
                        Your Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="callback-phone"
                          name="phone"
                          autoComplete="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          required
                          className="w-full bg-white/5 border border-gold/30 rounded-xl px-4 py-3 text-white placeholder-champagne/30 focus:outline-none focus:border-gold transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-gold via-[#F3E5AB] to-gold text-dark font-bold py-3.5 rounded-xl shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      <span>Request Immediate Call</span>
                      <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">WhatsApp Alert Sent!</h4>
                  <p className="text-sm text-champagne/80 leading-relaxed mb-5">
                    Mr. Machhindra Pisal&apos;s office has been alerted on WhatsApp with your number (<strong className="text-gold">{phone}</strong>). Expect an executive call within 15 minutes.
                  </p>
                  <a
                    href={`https://wa.me/919892116947?text=${encodeURIComponent(`Hello Shree Laxmi Associates, please call me back urgently within 15 minutes at my phone number: ${phone}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg hover:brightness-110 transition-all"
                  >
                    <span>Click here if WhatsApp didn&apos;t open automatically</span>
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
