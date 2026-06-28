// fs:
import fs from "fs";

// file and folder operations:
/*
    read / write files
    create / delete files
    append to files
    rename and move files
    change file permissions
*/

// read
/*
    fs - ( global build-in modules );
        readFileSync - читает фалы в синзронном коде но блокирует Event Loop:
*/ 

let readFIles = () => fs.readFileSync('./index.txt' , "utf-8");
// console.log(myFile);

// write and create
/*
    writeFileSync - создает файл если его нету , а если есть он перезаписывает.
*/ 

const writeFile = () => fs.writeFileSync("./index.txt" , "Salom Dunyo");
const createFiles = () => fs.writeFileSync("./data.json" , '{ "age":"23" , "id":1 , "name":[] }');

// delete:
/*
    fs.unlinkSync - используетя для удаления сущ файлов.
*/

const deletFile = () => fs.unlinkSync("./data.json");

// append files:
/*
    appendFileSync - добавляет инфо к сущ фалу не трогая его значения а просто добавляя в него.
*/

const appendFile = () => fs.appendFileSync("./index.txt" , " \t \n  qalesila bola");

// rename and move files
/*
    renameSync("filename" , "new filename");
    
    перемешение папки работает тогда когда существует данные папки.
*/

const renameFile = () => fs.renameSync("./index.txt" , './mine.txt');
const moveFile = () => fs.renameSync("./mine.txt" , "./app/move.txt");


// folder

