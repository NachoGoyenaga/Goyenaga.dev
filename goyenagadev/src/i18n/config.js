import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';
import esProjects from './locales/es/projects.json';
import esResume from './locales/es/resume.json';
import esContact from './locales/es/contact.json';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enProjects from './locales/en/projects.json';
import enResume from './locales/en/resume.json';
import enContact from './locales/en/contact.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        common: esCommon,
        home: esHome,
        projects: esProjects,
        resume: esResume,
        contact: esContact,
      },
      en: {
        common: enCommon,
        home: enHome,
        projects: enProjects,
        resume: enResume,
        contact: enContact,
      }
    },
    fallbackLng: 'es',
    defaultNS: 'common',
    ns: ['common', 'home', 'projects', 'resume', 'contact'], // <-- Registrar todos los namespaces
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;