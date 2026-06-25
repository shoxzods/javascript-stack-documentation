import express from "express";
import dotenv from "dotenv";

// app:
const app = express();

// dotenv config:
dotenv.config();

// port:
const port = process.env.PORT;

// endpoints:
app.get("/" , ( req , res ) => {
    res.send("some text here ")
});

// listen
app.listen( port , () => {
    console.log('http://localhost:3000');
})

// .env
/*
    .env - это специаьный файл который хранит секретные данные и port которые не должны отображатся в проде.

    чтобы .env работал с express нормально мы должны установить package dotenv.
        npm i dotenv

    и после установки мы должны включить doteenv.config();

    dotenv.config() — это функция, которая читает файл .env и загружает его переменные в объект process.env.

    и чтобы вызвать env мы должны вызвать из process Обекта nodejs:
        process.env.SECRET_KEY;
*/