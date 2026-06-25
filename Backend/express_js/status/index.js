// -------------------------------- Status ------------------------------------------------- //

// Сушествует несколько видов status:

/*
    statuses:
    200 - ok
    201 - Created
    204 - no content
    400 - Bad Request
    401 - unauthorizized
    403 - forbidden
    404 - not found
    409 - conflict
    422 - validation error
    500 - internal serveer Error
*/

import express from "express";

// app:
const app = express();


/*
    чтобы задать status мы должны использовать метод status() из res
*/

app.get( "/student/one/:id" , ( req , res ) => {
    const { id } = req.params;

    const students = [
        {
            id:1,
            full_name:"Shoxzod"
        },

        {
            id:3,
            full_name:"Primov"
        },
    ];

    const student_one = students.find(
        student => +student.id === +id
    );

    if ( !student_one )
        return res.status(404).json("404 not found")

    res.status(200).json(student_one);
});

const port = 3000;
app.listen( port , () => {
    console.log('the server is running in "http://localhost:3000"');
})