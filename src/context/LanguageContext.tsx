import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'mr' | 'hi';

interface Translations {
  [key: string]: {
    en: string;
    mr: string;
    hi: string;
  };
}

export const translations: Translations = {
  // Navbar
  'nav.home': { en: 'Home', mr: 'मुख्यपृष्ठ', hi: 'होम' },
  'nav.about': { en: 'About Us', mr: 'आमच्याबद्दल', hi: 'हमारे बारे में' },
  'nav.services': { en: 'Services', mr: 'सेवा', hi: 'सेवाएं' },
  'nav.investments': { en: 'Investments', mr: 'गुंतवणूक', hi: 'निवेश' },
  'nav.contact': { en: 'Contact', mr: 'संपर्क', hi: 'संपर्क करें' },
  
  // Hero
  'hero.title1': { en: 'Empowering Financial Institutions.', mr: 'आर्थिक संस्थांचे सक्षमीकरण.', hi: 'वित्तीय संस्थानों का सशक्तिकरण.' },
  'hero.title2': { en: 'Optimizing Operations.', mr: 'ऑपरेशन्स ऑप्टिमाइझ करणे.', hi: 'संचालन का अनुकूलन.' },
  'hero.subtitle': { 
    en: 'Your trusted partner for high-volume Debt Recovery, Field Verification, and Loan Sourcing across Mumbai.', 
    mr: 'मुंबईभरात उच्च-वॉल्यूम कर्ज वसुली, क्षेत्र पडताळणी आणि कर्ज सोर्सिंगसाठी आपला विश्वासार्ह भागीदार.', 
    hi: 'मुंबई भर में उच्च मात्रा में ऋण वसूली, क्षेत्र सत्यापन और ऋण सोर्सिंग के लिए आपका विश्वसनीय भागीदार।' 
  },
  'hero.btn.explore': { en: 'Explore Services', mr: 'सेवा एक्सप्लोर करा', hi: 'सेवाएं देखें' },
  'hero.btn.book': { en: 'Book Consultation', mr: 'सल्लामसलत बुक करा', hi: 'परामर्श बुक करें' },
  'hero.tag.trust': { en: 'RBI Compliant', mr: 'आरबीआय अनुपालन', hi: 'आरबीआई अनुपालन' },
  'hero.tag.secure': { en: 'Bank-Grade Security', mr: 'बँक-ग्रेड सुरक्षा', hi: 'बैंक-ग्रेड सुरक्षा' },
  'hero.tag.client': { en: 'DRA Certified', mr: 'डीआरए प्रमाणित', hi: 'डीआरए प्रमाणित' },

  // Stats
  'stats.happy_clients': { en: 'Happy Clients', mr: 'आनंदी ग्राहक', hi: 'संतुष्ट ग्राहक' },
  'stats.assets_managed': { en: 'Assets Managed', mr: 'व्यवस्थापित मालमत्ता', hi: 'प्रबंधित संपत्ति' },
  'stats.years_experience': { en: 'Years Experience', mr: 'वर्षांचा अनुभव', hi: 'वर्षों का अनुभव' },
  'stats.secure_compliant': { en: 'Secure & Compliant', mr: 'सुरक्षित आणि अनुपालन', hi: 'सुरक्षित और अनुपालन' },

  // About
  'about.hq': { en: 'Headquarters', mr: 'मुख्यालय', hi: 'मुख्यालय' },
  'about.location': { en: 'Mumbai', mr: 'मुंबई', hi: 'मुंबई' },
  'about.reach': { en: '85% Market Reach', mr: '८५% बाजारातील पोहोच', hi: '८५% बाज़ार पहुंच' },
  'about.multilingual': { en: 'Multilingual', mr: 'बहुभाषिक', hi: 'बहुभाषी' },
  'about.languages': { en: '4+ Languages', mr: '४+ भाषा', hi: '४+ भाषाएं' },
  'about.tag': { en: 'Our Legacy', mr: 'आमचा वारसा', hi: 'हमारी विरासत' },
  'about.title': { en: '7+ Years of Financial Excellence', mr: '७+ वर्षांचे आर्थिक प्राविण्य', hi: '७+ वर्षों की वित्तीय उत्कृष्टता' },
  'about.p1': { en: 'Founded by Mr. Machhindra Pisal, Shree Laxmi Associates brings over 7 years of relentless dedication to banking operations and recovery services.', mr: 'श्री मच्छिंद्र पिसाळ यांनी स्थापित केलेली श्री लक्ष्मी असोसिएट्स बँकिंग ऑपरेशन्स आणि रिकव्हरी सेवांमध्ये ७ वर्षांपेक्षा जास्त काळ अविरत समर्पण घेऊन आली आहे.', hi: 'श्री मच्छिंद्र पिसाल द्वारा स्थापित, श्री लक्ष्मी एसोसिएट्स बैंकिंग संचालन और रिकवरी सेवाओं में 7 से अधिक वर्षों का निरंतर समर्पण लाती है।' },
  'about.p2': { en: "Our dynamic team of DRA-certified professionals and field officers across Mumbai's Central, Western, and Harbour lines ensures efficient, ethical resolution for top-tier corporate banks and financial institutions.", mr: 'मुंबईच्या मध्य, पश्चिम आणि हार्बर मार्गांवरील डीआरए-प्रमाणित व्यावसायिक आणि क्षेत्र अधिकाऱ्यांची आमची कार्यशील टीम सर्वोच्च कॉर्पोरेट बँका आणि आर्थिक संस्थांसाठी कार्यक्षम, नैतिक निराकरण सुनिश्चित करते.', hi: 'मुंबई के सेंट्रल, वेस्टर्न और हार्बर लाइनों में डीआरए-प्रमाणित पेशेवरों और फील्ड अधिकारियों की हमारी गतिशील टीम शीर्ष कॉर्पोरेट बैंकों और वित्तीय संस्थानों के लिए कुशल, नैतिक समाधान सुनिश्चित करती है।' },
  'about.box1.title': { en: 'Multilingual Negotiation', mr: 'बहुभाषिक वाटाघाटी', hi: 'बहुभाषी बातचीत' },
  'about.box1.desc': { en: 'Fluently communicating in English, Hindi, Marathi, etc. for amicable resolutions.', mr: 'सौहार्दपूर्ण निराकरणासाठी इंग्रजी, हिंदी, मराठी इत्यादी भाषांमध्ये अस्खलितपणे संवाद साधणे.', hi: 'सौहार्दपूर्ण समाधान के लिए अंग्रेजी, हिंदी, मराठी आदि में धाराप्रवाह संवाद करना।' },
  'about.box2.title': { en: 'Ethical Practices', mr: 'नैतिक पद्धती', hi: 'नैतिक प्रथाएं' },
  'about.box2.desc': { en: 'Strict adherence to RBI guidelines and data privacy regulations.', mr: 'आरबीआयच्या मार्गदर्शक तत्त्वांचे आणि डेटा गोपनीयतेच्या नियमांचे कठोर पालन.', hi: 'आरबीआई के दिशानिर्देशों और डेटा गोपनीयता नियमों का कड़ाई से पालन।' }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
