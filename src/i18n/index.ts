import en from './en/translations.en.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: './en/translations.en.json',
    },
    vn: {
      translations: './vn/translations.vn.json',
    },
  },
  fallbackLng: 'en',
});

export default i18n;
