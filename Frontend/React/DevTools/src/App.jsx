// ----------------------- React Dev Tools Extension ------------------------------------- //

import { memo, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

/*
  Специальная расширения для бразуера чтобы отслеживать измеения в react

  установка:
    https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi -> chrome
    https://addons.mozilla.org/en-US/firefox/addon/react-devtools/ -> firefox
*/ 

export default function DevTools() {
  const [ color , setColor ] = useState("red");
  
  const changeColor = () => 
    setColor( prev => prev == 'red' ? "green" : 'red' );
 
  const MyFooter = memo(Footer);
  return (
    <>
      <p style={{color:color}}>somet text</p>
      <Header />
      <button onClick={changeColor}>render</button>
      <MyFooter title="footer" />
    </>
  )
}