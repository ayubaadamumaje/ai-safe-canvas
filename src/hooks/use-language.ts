import { useState, useEffect } from 'react';

export type Language = 'en' | 'ha' | 'yo' | 'ig' | 'kr';

const translations = {
  en: {
    welcome: 'Welcome to EduBridge Yobe',
    tagline: 'Ensuring uninterrupted learning and safety for every student.',
    login: 'Login',
    signup: 'Sign Up',
    dashboard: 'Dashboard',
    courses: 'Courses',
    safety: 'Safety',
    library: 'Library',
    aiTutor: 'AI Tutor',
    offlineMode: 'Offline Mode',
    emergency: 'Emergency',
    logout: 'Logout',
  },
  ha: {
    welcome: 'Barka da zuwa EduBridge Yobe',
    tagline: 'Tabbatar da ilimi ba tare da tsangwama ba da kuma aminci ga kowane dalibi.',
    login: 'Shiga',
    signup: 'Yi rijista',
    dashboard: 'Dashboard',
    courses: 'Darussa',
    safety: 'Tsaro',
    library: 'Laburare',
    aiTutor: 'AI Tutor',
    offlineMode: 'Yanayin Offline',
    emergency: 'Gaggawa',
    logout: 'Fita',
  },
  yo: {
    welcome: 'Kaabo si EduBridge Yobe',
    tagline: 'Ni idaniloju eko ti ko ni idilọwọ ati aabo fun gbogbo ọmọ ile-iwe.',
    login: 'Wo ile',
    signup: 'Forukọsilẹ',
    dashboard: 'Dasibodu',
    courses: 'Awọn iṣẹ ikẹkọ',
    safety: 'Aabo',
    library: 'Ibi ipamọ iwe',
    aiTutor: 'AI Olukọni',
    offlineMode: 'Ipo Aisinipo',
    emergency: 'Pajawiri',
    logout: 'Jade kuro',
  },
  ig: {
    welcome: 'Nnọọ na EduBridge Yobe',
    tagline: 'Ịhụ na agụmakwụkwọ anaghị akwụsị akwụsị na nchekwa maka onye ọ bụla na-amụ ihe.',
    login: 'Banye',
    signup: 'Debanye aha',
    dashboard: 'Dashboard',
    courses: 'Ihe ọmụmụ',
    safety: 'Nchekwa',
    library: 'Ọba akwụkwọ',
    aiTutor: 'AI Tutor',
    offlineMode: 'Ụdị offline',
    emergency: 'Mberede',
    logout: 'Pụọ',
  },
  kr: {
    welcome: 'Barka de se EduBridge Yobe',
    tagline: 'Ensuring uninterrupted learning and safety for every student.', // Placeholder for Kanuri
    login: 'Shiga',
    signup: 'Yi rijista',
    dashboard: 'Dashboard',
    courses: 'Darussa',
    safety: 'Tsaro',
    library: 'Laburare',
    aiTutor: 'AI Tutor',
    offlineMode: 'Yanayin Offline',
    emergency: 'Gaggawa',
    logout: 'Fita',
  }
};

export const useLanguage = () => {
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('edusafe_lang') as Language) || 'en';
  });

  const t = (key: keyof typeof translations.en) => {
    return translations[lang][key] || translations.en[key];
  };

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('edusafe_lang', newLang);
  };

  return { lang, t, changeLanguage };
};
