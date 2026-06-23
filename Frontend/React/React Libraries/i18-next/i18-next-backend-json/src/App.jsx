import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t , i18n } = useTranslation();
  const [ lang , setLang ] = useState("en");
  return (
    <>
      <p>{t('welcome')}</p>
      <button onClick={() => {
        setLang(current => current === "en" ? "ru" : "en");
        i18n.changeLanguage(lang); 
      }}>change language</button>
    </>
  )
}