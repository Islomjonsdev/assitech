import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: {
        // Header
        about_us: "Biz haqimizda",
        contact: "Aloqa",
        product: "Mahsulotlar",
        services: "Xizmatlar",
        install: "O'rnatish",

        //  Hero
        assaTech1:
          "Bizning ASSITECHBIO kompaniyamiz quyidagilarga ixtisoslashgan: ultratovush asboblarini sotish va xizmat ko'rsatish va ultratovush kurslarini tashkil etish.",
        assatech2:
          "Biz turli ishlab chiqaruvchilar va narx toifalarining keng assortimentini taklif etamiz: mobil xizmatlar uchun ixcham portativ ultratovush apparatlaridan tortib tibbiyot muassasalari uchun yuqori aniqlikdagi statsionar qurilmalargacha.",
        assaTech3:
          "Biz ishonchli yetkazib beruvchilar bilan ishlaymiz va mahsulot sifatini kafolatlaymiz, shuningdek, ultratovushli qurilmalar uchun kafolat va kafolatdan keyingi xizmatni taqdim etamiz.",
        assaTech4:
          "Mutaxassislarimiz tibbiy asbob-uskunalar sohasida katta tajribaga ega va har doim kerakli asbob-uskunalarni tanlash va o'rnatishda yordam berishga tayyor.",
        assaTech5:
          "Bizning maqsadimiz mijozlarni eng yaxshi ultratovush apparatlari bilan ta'minlash, ularning ishini optimallashtirishga yordam berish va bemorlarni tashxislash va davolash samaradorligini oshirishdir.",
        assaTech6:
          "Biz mijozlarimiz bilan uzoq muddatli munosabatlarga intilamiz, ularga faqat eng yaxshi uskunalar va xizmatlarni taklif qilamiz.",

        // Brands

        brands: "Brend",
        dealer: "Dilerlar",
        Employees: "Xodimlar",
        clients: "Mijozlar",
        numbers: "Biz raqamlardamiz",
        suport: "Qo'llab-quvvatlaymiz",
        stages: "mijozni barcha bosqichlarda",

        // delivery

        delivery: "Yetkazib beramiz",
        medical: "tibbiy uskunalarni to'g'ridan-to'g'ri ishlab chiqaruvchidan",
        solve: "Hal qilamiz",
        tasks: "kompleks tibbiy jihozlash va servis xizmatlari vazifalarini",

        // Information

        information: "Bog'lanish uchun ma'lumot",
        details: "Ushbu kontakt ma'lumotlaridan foydalanib qo'shimcha ma'lumot olishingiz mumkin",
        question_us: "Bizga qanday savollaringiz bor?",
        enter_name: "Ismingizni kiriting",
        enter_number: "Telefon raqami",
        message: "Sizning xabaringiz",
        send: "Yuborish",

        // Footer

        contact: "Aloqa",
        company: "Kompaniya manzili / Markaziy savdo ofisi:",
        phone: "Telefon",
        mail: "Pochta:",
        schedule: "Ish jadvali:",
        networks: "Biz ijtimoiy tarmoqlardamiz:"
      },
    },
    ru: {
      translation: {
        // Header
        about_us: "О нас",
        contact: "Контакт",
        product: "Продукция",
        services: "Услуги",
        install: "Установка",

        //  Hero
        assaTech1:
          "Наша компания ASSITECHBIO специализируется на: продаже и обслуживании ультразвуковых аппаратов и организации курсов УЗД.",
        assatech2:
          "Мы предлагаем широкий ассортимент оборудования различных производителей и ценовых категорий: от компактных портативных узи аппаратов для мобильных услуг до высокоточных стационарных установок для медицинских учреждений.",
        assaTech3:
          "Мы работаем с проверенными поставщиками и гарантируем качество продукции, а также предоставляем гарантийное и послегарантийное обслуживание ультразвуковых аппаратов.",
        assaTech4:
          "Наши специалисты имеют большой опыт в области медицинского оборудования и всегда готовы помочь с выбором и установкой необходимого оборудования.",
        assaTech5:
          "Наша цель - обеспечить клиентов наилучшими ультразвуковыми аппаратами, помочь им оптимизировать свою работу и повысить эффективность диагностики и лечения пациентов.",
        assaTech6:
          "Мы стремимся к долгосрочным отношениям с нашими клиентами, предлагая им только лучшее оборудование и сервис.",

        // Brands
        brands: "Бренд",
        dealer: "Дилеры",
        employees: "Сотрудники",
        clients: "Клиенты",
        numbers: "Мы в цифрах",
        suport: "Сопровождаем",
        stages: "клиента на всех этапах",

        // delivery

        delivery: "Поставляем",
        medical: "медицинское оборудование напрямую от производителя",
        solve: "Решаем",
        tasks: "задачи комплексного медицинского оснащения и сервисного обслуживания",

        // Information

        information: "Контактная информация",
        details: "Вы можете получить больше информации с помощью этих контактных данных",
        question_us: "Какие вопросы у вас есть к нам?",
        enter_name: "Введите ваше имя",
        enter_number: "Номер телефона",
        message: "Ваше сообщение",
        send: "Отправить",

        // Footer
        contact: "Контакты",
        company: "Адрес компании / Центральный офис продаж:",
        phone: "Телефон",
        mail: "Почта:",
        schedule: "Режим работы:",
        networks: "Мы в социальных сетях:"
      },
    },
    en: {
      translation: {
        // Header
        about_us: "About Us",
        contact: "Contact",
        product: "Product",
        services: "Services",
        install: "Installation",
        

        //  Hero
        assaTech1:
          "Our company ASSITECHBIO specializes in: sales and maintenance of ultrasound equipment and organization of ultrasound courses.",
        assatech2:
          "We offer a wide range of equipment from various manufacturers and price categories: from compact portable ultrasound machines for mobile services to high-precision stationary installations for medical institutions.",
        assaTech3:
          "We work with trusted suppliers and guarantee product quality, as well as provide warranty and post-warranty service for ultrasound devices.",
        assaTech4:
          "Our specialists have extensive experience in the field of medical equipment and are always ready to help with the selection and installation of the necessary equipment.",
        assaTech5:
          "Our goal is to provide customers with the best ultrasound equipment, help them optimize their work and improve the efficiency of diagnostics and treatment of patients.",
        assaTech6:
          "We strive to build long-term relationships with our customers by offering them only the best equipment and service.",

        // Brands
        brands: "Brand",
        dealer: "Dealers",
        Employees: "Employees",
        clients: "Clients",
        numbers: "We are in numbers",
        suport: "Support",
        stages: "clients at all stages",

        // delivery
        delivery: "Supply",
        medical: "medical equipment directly from the manufacturer",
        solve: "Solve",
        tasks: "tasks of comprehensive medical equipment and service maintenance",

        // Informatio

        information: "Contact information",
        details: "You can get more information using these contact details.",
        question_us: "What questions do you have for us?",
        enter_name: "Enter your name",
        enter_number: "Phone number",
        message: "Your message",
        send: "Send",

        // Footer
        contact: "Contact",
        company: "Company address / Central Sales Office:",
        phone: "Phone:",
        mail: "Mail:",
        schedule: "Working schedule",
        networks: "We are in social networks"
      },
    },
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
