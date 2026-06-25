// --------------------------- nodemon and node ------------------------------------------ //

/*
    Чобы запустить наш сервер мы сначала должны импортировать expressjs с express package;

    Далше должны вызвать функцию express() И создать app.

    Давайте теперь просто создадим get запрос.
*/

import express from "express";
const app = express();
const port = 3000;

app.listen(port , () => {
    console.log("the server has started at 'http://localhost:3000'")
})

// ( NODE ) Чтобы запустить server мы должны использовать node.
/*
    node server.js

    Проблема использовании node для запуска сервера. Проблема в том что node не обновляет изменения в сервера автоматически
    и чобы совершить это нам приходится установить nodemon package
*/

// nodemon:
/*
    npm i ( install ) nodemon.

    nodemon в отличие от node может автоматически обновлять сосотояния сервера.
*/

// мы также можем настроить "scripts:" чтобы каждый раз не писать nodemon file.js

/* 
  "scripts": {
    "start": "nodemon index.js"
   }
*/