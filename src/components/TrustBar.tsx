import { CheckCircle2, ShieldCheck, MapPin, Users, HeartHandshake } from 'lucide-react';

export default function TrustBar() {
  const trustSignals = [
    { text: "Trusted Financial Advisors", icon: Users },
    { text: "7+ Years Experience", icon: CheckCircle2 },
    { text: "Mumbai Wide Service", icon: MapPin },
    { text: "Secure & Confidential", icon: ShieldCheck },
    { text: "Client First Approach", icon: HeartHandshake },
  ];

  // We duplicate the array multiple times to ensure a seamless continuous scroll
  const duplicatedSignals = [...trustSignals, ...trustSignals, ...trustSignals, ...trustSignals];

  return (
    <div className="bg-burgundy/20 border-b border-gold/20 py-2.5 overflow-hidden relative z-50 backdrop-blur-md">
      <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
        {duplicatedSignals.map((signal, index) => {
          const Icon = signal.icon;
          return (
            <div key={index} className="flex items-center gap-2 mx-8 text-champagne/90 whitespace-nowrap group cursor-default">
              <Icon size={16} className="text-gold group-hover:scale-125 transition-transform" />
              <span className="text-sm font-semibold tracking-wide uppercase">{signal.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
