// -------------------------------- Библиотека styled-components ---------------------------------- //

/*
  Библиотека ( React Library ) styled-components дает возмодность создать свой уникальный елемент который
  при переводе на js она преврашается в обычный html но имеет униакльный класс который не может вмешатся с
  глобальным css.

  установка: npm install ( i ) styled-components
*/

import styled from "styled-components";

const MyButton = styled.button`
color:red;
cursor:pointer;
border:none;
box-shadow: 0 2px 0.1px silver;
border-radius:4px;
transition:0.1s all;
padding:2px 4px; 

&:active {
  box-shadow: 0 0.5px 0 silver;
  transform:translateY(1px);
}
`;

export default function StyledComponents() {
  return (
    <>
      <MyButton>click</MyButton>
    </>
  )
}