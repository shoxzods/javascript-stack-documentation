import express from "express";

// app:
const app = express();

// default endpoint:
app.get("/" , ( _ , res) => {
    res.send("the data is running")
});

// params and searchParams:
/*
    req.params - возвращает параметры из клиентской части.
    req.query - используется для тч=ого чтобы правть searchParams.
*/ 

// params
app.get("/student/one/:id" , ( req , res ) => {
    const { id } = req.params;
    const data = [
        {
            id:1,
            age:23
        },

        {
            id:2,
            age:20
        },

        {
            id:3,
            age:40
        },
    ];

    const filter = data.find(
        item => +item.id === +id
    );

    res.json(filter);
});

// searchParams;
/*
    searchParams не пишестя в сервере а она настроится прямо в бразере:

    /studetn/?age=23&name=shoxzod
*/ 
app.get("/student" , ( req , res ) => {
    const { age } = req.query;
    const data = [
        {
            id:1,
            age:23
        },

        {
            id:2,
            age:20
        },

        {
            id:3,
            age:40
        },
    ];

    const filter = data.find(
        item => +item.age === +age
    )
    res.json(filter);
});


// notFound: ( * ) -> undefined endpoint
/*
    notFound используется для того чтобы сказать что такой api не сущестует.
*/

app.get(/.*/ , ( _ , res ) => {
    res.send("404 Not Found")
});


// port:
const port = 3000;
app.listen(port  , () => {
    console.log("the server is running 'http://localhost:3000'");
});