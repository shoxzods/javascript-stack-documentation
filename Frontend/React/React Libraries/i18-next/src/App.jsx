import { useTranslation } from "react-i18next";

export default function I_18next() {
  const { t , i18n } = useTranslation();
  
  return (
    <>
        <h1>{t('welcome')}</h1>
        <h2>{t('greeting' , {name:"anya"})}</h2>

        <button onClick={() => {
          i18n.changeLanguage('ru')
        }}>ru</button>
        <button onClick={() => {
          i18n.changeLanguage("en")
        }}>en</button>
    </>
  )
}