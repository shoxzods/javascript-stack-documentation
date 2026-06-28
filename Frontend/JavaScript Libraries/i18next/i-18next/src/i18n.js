import i18next from "i18next";
import ru from "./locales/ru.json";
import en from "./locales/en.json";

await i18next.init({
    lng: "en",
    fallbackLng:"ru",
    resources: {
        ru: { translation: ru },
        en: { translation: en },
    },

    interpolation: {
        escapeValue:true
    }
})

export default i18next;


// npm i i18next
/*
    язки хранятся в resources:

    interpolation нужна чтобы зашититcя от xss атаки.
    и дает возможность написать "greeting":" Hello {{names}} !" чтобы мы могли изменить значения. names
*/