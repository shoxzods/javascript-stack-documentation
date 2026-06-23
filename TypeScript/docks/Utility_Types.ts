// ------------------------ utility types --------------------------------------------------- //

/*
    Утилитраные типы это число огромных списсков типов которые манипуоируется.
*/

// Partial:
/*
    Partial типы поменяет все типы property оббектов чтобы они были optional.

    Partial <object property types>
*/

const myObj: Partial <{ name:string , age:number , isActive: boolean }> = {};


// Required:
/*
    Required - вынуждает всех типов property обьекта быть заполненым.
    и даже ?. optional parametr не поможет.
    
    Requried <object property types>
*/

const newObj: Required<{ name:string , age:number , isActive?:boolean }> = {
    name:"Shoxzod",
    age:23,
    isActive:true
};


// Record
/*
    Record тип определяет ключи и значение в определенный тип.

    Record< key-type , value-type >
*/

const indexObj:Record< string , string > = {
    name:"string",
    last_name:"Primov"
}

// Omit
/*
    Omit - удаляет ключи из обтекных типов.

    Omit< Object type , ommited types | ommited types  >
*/

const object: Omit <{name:string , age:23} , "name" > = {
    age:23
};


// Pick
/*
    Pick - удаляет все но оставляет который выдленные.

    Pick <Object , picked Type | picked Type>
*/

const news: Pick<{name:string , age:number} , "name"> = {
    name:"some text here"
};


// Exclude
/*
    убирает типы из union типов.
    Exclude < union type , spesific type >
*/

type multi = number | string | boolean;
const types: Exclude<multi , number> = true;


// ReturnType:
/*
    ReturnType копирует return тип функции и дает возможность его испольщовать
*/

type myTypes = () => number;
const nums: ReturnType <myTypes> = 12;

// Readonly:
/*
    Readonly может создать новый тип у которго все типы станет только для чтения.
*/

const mops: Readonly <{age:number , name:string }> = {
    age:23,
    name:'some text here'
};


// Parametrs: -> можно изучить только если понял Tuple