import express from "express";

/*
    1.app - нужен чтобы использовать все фичи express.
    2.port - чтобы запустить в определенный port.
*/

const app = express();

// Сушествует 5 основных методов у express.js
/*
    get , post , delete , put , patch
*/


// request and response:
/*
    app.method( "/pathname" , ( req  , res ) => {} );

    1.req - обтек который содержит данные которые приходит из клиентской части.

    2.res - мы отправляет данные для клиентской части:
        send - метод для отправки данные для клиентской части.
        json - метод для отправки данные в виде json()
*/ 

app.get( "/" , ( req , res ) => {
    console.log(req)
    res.send('some text here');
});

app.get("/jsonplaceholder" , (req , res) => {
    const data = [
        {
            id:1,
            age:23,
            full_name:"Shoxzod",
        }
    ];

    res.json(data);
});

// listen
/*
    listen - нужен чтобы слушать port и запустить сервер.
*/

const port = 3000;
app.listen( port , () => {
    console.log('the server is started "http://localhost:3000"');
} )