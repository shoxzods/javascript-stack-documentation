/*
    Устанвока i18next:

    npm install i18next react-i18next
*/ 

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

/*
    resources - это место где мы храним данные для изменнеия языков.
*/

const resources = {
    en: {
        translation: {
            welcome:"Welcome!",
            greeting: 'Hello {{name}}!'
        },
    },

    ru: {
        translation:{
            welcome:"Добро Пожадлвать!",
            greeting:"Привет {{name}}!"
        }
    }
}

/*
    lang - это основной язык
   
    fallback lang - это язык если не нашелся lang
    
    interpolation - это такой механизм который пердоставляет оставить место для того чтобы выполнить в клиентской части 
    без него нам приходилось бы писать все в ручную в sources. -  welcome: "Привет {{name}}!" ,
*/


/*
    Подключает плагин initReactI18next — это "мост" между i18next и React. 
    Без него i18next будет работать как обычная JS-библиотека, но хук useTranslation() 
    не заработает в React-компонентах. Метод .use() — это система плагинов i18next, 
    через неё подключаются и другие расширения (backend, language-detector и т.д.).
*/ 

i18n.use(initReactI18next).init({
    resources,
    lng:"ru",
    fallbackLng:"en",
    interpolation: {
        escapeValue:false
    }
});

export default i18n;