import i18n from "./i18n.js";

const t = i18n.t.bind(i18n);

async function changeLanguage(lan) {
    await i18n.changeLanguage(lan);
}

changeLanguage("ru");

console.log(t("greeting" , { names: "Shoxzod" }))
