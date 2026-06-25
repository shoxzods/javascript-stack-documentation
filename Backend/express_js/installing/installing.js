// -------------------------------- Installing  -------------------------------------------------- //


// До установки express js мы должны настроить package.json

/*
    npm init / npm init -y ( yes )

    npm init - подгатавливает package но он спрашивает какие данные ввести в package

    npm init -y - он пропускает запросы и сам автоматически заполнит поля package.
*/


// package.json:
/*

{
  "name": "installing", // название нашего проекта
  "version": "1.0.0",
  "description": "", 
  "main": "index.js", // основной файл
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1" // для настройки script команды
  },
  "keywords": [],
  "author": "", 
  "license": "ISC",
  "type": "commonjs" // сущестует два модуля в node js enviroment "commonjs" и "module"( современный способ ),
    
   "dependencies": { // здесь хранится весь package которые мы установили для проекта.
   }

}

*/

// установка expressjs
/*
    npm install ( i ) express
*/

// package.json
/*
  "dependencies": {
    "express": "^5.2.1"
  }
*/ 