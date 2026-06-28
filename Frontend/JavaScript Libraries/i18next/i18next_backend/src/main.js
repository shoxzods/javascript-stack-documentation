import i18n from "./i18n.js";

const t = i18n.t.bind(i18n);

async function changeLanguage(lang) {
    await i18n.changeLanguage(lang)
}

changeLanguage('en');
console.log(t('dir.left' , { side:'left' }));


// npm install i18next-http-backend
// npm i i18next 