// --------------------------------- use --------------------------------------- //

/*
    use - используется для того чтобы перенаправить endpoints в самый главный файл.

    app - "/" является самый большим router и поэтому он принимает осатльные роутеры как его дети
    она использует метод express.

    Router - нужна чтобы написать children routes который после завершения настройки ротуера перенаправляется к app.
*/ 


import express from "express";
import { Router } from "express";

// app:
const app = express();

// port:
const port = 3000;

// teacher router
const teacherRouter = Router();
teacherRouter.get('/teacher' , ( req , res ) => {
    res.send("some teacher here");
});

// app:
app.use("/" , teacherRouter );


// listen:
app.listen(port , () => {
    console.log("server: http://localhost:3000");
});