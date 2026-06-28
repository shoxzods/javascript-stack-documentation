import i18next from "i18next";
import HttpBackend from "i18next-http-backend";


await i18next.use(HttpBackend).init({
    lng:"ru",
    fallbackLng:"en",
    'backend':{
        loadPath:"/locales/{{lng}}.json"
    }
})

export default i18next;