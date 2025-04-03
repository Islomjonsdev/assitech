import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: {
       about_us: "Biz haqimizda",
       contact: "Aloqa",
       product: "Mahsulotlar",
       services: "Xizmatlar",
       install: "O'rnatish"
      },
    },
    ru: {
      translation: {
       about_us: "О нас",
       contact: "Контакт",
       product: "Продукция",
       services: "Услуги",
       install: "Установка"
      },
    },
    en: {
      translation: {
       about_us: "About Us",
       contact: "Contact",
       product: "Product",
       services: "Services",
       install: "Installation"
       
      },
    },
  },
  lng: 'ru',
  fallbackLng: 'ru', 
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
