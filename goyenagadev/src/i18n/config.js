import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Únicamente los JSON estrictamente necesarios para pintar la pantalla de inicio
import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        common: esCommon,
        home: esHome,
      },
      en: {
        common: enCommon,
        home: enHome,
      }
    },
    fallbackLng: 'es',
    defaultNS: 'common',
    ns: ['common', 'home'],
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false // Cero bloqueo de renderizado
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

// Función auxiliar para que las páginas secundarias agreguen sus traducciones solo cuando se visitan
export const loadNamespace = async (ns) => {
  if (i18n.hasResourceBundle('es', ns)) return;

  const [esModule, enModule] = await Promise.all([
    import(`./locales/es/${ns}.json`),
    import(`./locales/en/${ns}.json`)
  ]);

  i18n.addResourceBundle('es', ns, esModule.default || esModule, true, true);
  i18n.addResourceBundle('en', ns, enModule.default || enModule, true, true);
};

export default i18n;