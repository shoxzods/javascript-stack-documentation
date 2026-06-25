import express from "express";
import dotenv from "dotenv";
import mainRouter from "./router/main.router.js";

// app:
const app = express();

// config:
dotenv.config();

// port:
const port = process.env.PORT;

// app router:
app.use("/" , mainRouter );

app.listen(port , () => {
    console.log("http://localhost:3300");
});



/*
    controller - это функции которые вызываются для router.
    router - это енпоинты.
*/ 