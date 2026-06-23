// ----------------------------------- Material UI ------------------------------------------------------ //

/*
  Material UI ( Только для React ) - это специальная библиотека для работы с готовыми компонентами.

  установка:
  npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
*/



// @mui/material - переимпортирует готовые компоннеты с material ui -> @mui/material/ComponentName
// @mui/icons-material - дает возможность использовать иконки material ui -> @mui/icons-material/iconName
// @emotion/styled - это движок CSS-in-JS. Он дает возможность писать стили локально в компоннете без использования глобалного стиля.

/*
  глобальный css не работает с Material UI , и для того чтобы работать сними нам приходится использовать props << sx >> -
  подстроенный для material ui
*/ 

// https://mui.com/material-ui/ - чтобы узнать побольше посетите данный сайт.


import Button from '@mui/material/Button'; // component 
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'; // icon
import styled from "@emotion/styled";

const MyButton = styled.h1
`
  color:red
`;

export default function MaterialUi() {
  return (
    <>
      <MyButton>Lorem.</MyButton>
      <AddLocationAltIcon sx={{color:"red"}} />
      <Button variant="text" sx={
        { 

          background:"green" ,
          transition:"0.5s",
          color:"white" , 
          "&:hover": {
            color:"red",
          },

          "&:active":{
            transform:"translateY(1px)"
          },

          "@keyframes pulse": {
            "from":{
                color:"gray"
            },

            "to": {
                color:"yellow"
            }
          },
          animation:"pulse 2s ease-in infinite"

       }} >Text</Button>
    </>
  )
}
