// ----------------------------------- Ant Design ------------------------------------------------ //

/*
  Ant Design является Ui библиотека для REACT , в отличие от material ui он подердивает 
  глобальный css.

  установка ant design:
    npm install ( i ) antd --save

  установка ant design icons:
    npm install ( i ) @ant-design/icons@6.x --save

  https://ant.design/  -> чтобы узнать большк посетите данный сайт.
*/


// components and icons:

import { Button } from "antd";
import { FileSearchOutlined } from "@ant-design/icons";

export default function AntDesign() {
  return (
    <>
      <p>
        <FileSearchOutlined />
      </p>
      <Button style={{fontSize:"12px"}} icon={<FileSearchOutlined />} />
    </>
  )
}