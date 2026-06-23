// ----------------------------- React Styling --------------------------------------- //

// Cушествует несколько способ стилизации.

/*
    inline
    CSS Stylesheet
    Css Modules
    css-in-js
*/


// inline styling
/*
  в inline styling мы используем атрибут style чтобы задать стили.
*/

export function Inline() {
    return (
      <>
        <p style={{color:"red"}}>Lorem.</p>
      </>
    )
}

// CSS StyleSheet
/*
  CSS StyleSheet мы используем глобальный css файлы и все селекторы являются глобальным.
*/

// index.css
import "./index.css";

function StyleSheet() {
  return (
    <p className="changeColor">css style sheet</p>
  )
}


// Css modules
/*
  CSS module является самым безопасным способ написания классов
  из за того чтоо классы обращаются к обьекту styles.
*/

import styles from "./main.module.css";

export function Module() {
    return (
      <p className={styles.changeColor}>Lorem.</p>  
    )
}

// Composing classes;
/*
  composes - помогает наследовать стили от другой селекторов.
*/

export function ComposingModule() {
    return (
      <p className={styles.personalColor}>Lorem.</p>
    )
}


// :global(.globalClass)
/*
  чтобы использовать глобальный класс в css module мы должны использовать :global
*/

export function GlobalModule() {
  return (
    <p className="global">Lorem.</p>
  )
}



// CSS_in_JS:

/*
  Через styled Components мы можем создать свой уникальный react елемент у которого стили изолированы 
  и не будет перемешиватся с остальными стилями. Она генерирует свой уникальный класс.

  styed-components - это библиотека для React:
    npm install styled-components
*/

import styled from "styled-components";

const ModalWindow = styled.div
`
  border:1px solid black;
  color:red;
  max-width:400px;
  animation: 2s myStyle ease-in infinite;

  &:hover {
    background:silver
  }

  @keyframes myStyle {
      from {
        transform:scale(1)
      }

      to {
        transform:scale(2)
      }
  }
`;

export default function StyledComponent() {
    return (
      <ModalWindow>
        modal
      </ModalWindow>
    )
}