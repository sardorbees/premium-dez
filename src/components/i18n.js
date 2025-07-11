import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        translation: {
          welcome: 'Добро пожаловать',
          description: 'Описание услуги',
        }
      },
      uz: {
        translation: {
          welcome: 'Xush kelibsiz',
          description: 'Xizmat tavsifi',
        }
      }
    },
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;