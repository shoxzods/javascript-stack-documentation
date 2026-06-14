// --------------------------- Aliases & Interface ------------------------------------------------------ //

/*
    TS позваоляет использовать типы данных отдельно от переменных которые их используют

    Aliases & Interface позволяют легко использовать одни и те же данные между различными переменными / обьектами
*/


// Aliases Types: (Псевдонимы)
/*
    Псевдонимы типов возволяет определять типы с собственными именами

    Псевдонимы принимают primitive тип даннычх и reference типы данных.
    Используется ключевое слово "type"
*/

// alisas types width Primitives:
type num = number; // primitive тип данных
const number:num = 12;

type unions = number | string | boolean // комбинация alias type с union типами
let passKey:unions = 'salom';

type literals = 'number' | 12 | true // комбинация alias type с union и literal типами
let post:literals = true;


// Alisas types width Objects;
type forObjects = {
    [index:number | string]: number | string | boolean | undefined, 
    full_name:number, // simple type
    age?:number, // optional
    password: 123 | "not found" | false, // union

};

const myObj: forObjects = {
    full_name:12,
    password:123
};


// Alias in Array
type forArray = (number | string)[];
type arrayList = ('string' | 12)[];

const proms:forArray = [ 12  , ''];
const myProms:arrayList = [12 , "string"];


// Alias for functions:
type functionTypes = () => void; // array type
const myFunction: functionTypes = () => console.log('some text here');

type newerFunction = ( a:number , b:number ) => number;
const pors:newerFunction = function( a  , b ) {
    return 12 + a + b
}

// Alias implements:
/*
    Alias implements это контракт Object Alias types с class ами.
*/

type data_numbers = {
    phonq_number:number,
}

class Call implements data_numbers {
    phonq_number = 991234555
}


// Alias intersection:
/*
    Alias intersection ()  дает примушество обединить нескольок Alias Type , 
    работает только для обьектов. 
*/

type Father = {
    number: string | number,
    role: "admin" | "teacher"
}

type Mother = Father & { age:number };

const personalData:Mother = {
    number: 12,
    role:"admin",
    age:23
};


// Interfaces:
/*
    Intefaces похоже как Alias Types но в отличие они используются для обьектов.
*/

interface App {  // objects
    full_name:string,
    age: 23 | 121 | true,
    arr: (number | string)[],
    maths?():number,
};

const myObject:App = {
    full_name:"Ali",
    age:23,
    arr: [ 12 , "2" ],
}

type myFunction =  {
    num1:number,
    num2:number
};

// Interface Merging
/*
    Interface Mergin это соединение нескольких Интерфейсов.
    
    interface имееюзий одинаковые названия interface имеют возможность сложить свои даты.
*/

interface Animal { full_name:string } interface Animal { last_name ?: string }

const myList:Animal = {
    full_name:"primov",
    last_name:"Shoxzod"
}

// Interface Extends:
/*
    Interface может удочерить остальные Interface типы:
*/

interface Color {
    red:string,
    green:string,
    white:string
};

interface myColor extends Color {
    black:boolean
};

const myColorFLavor:myColor = {
    red:"red",
    green:"green",
    white:"white",
    black:false
}

// Implements:
/*
    Implements это контракт между интерфейсом и классами.
*/

interface Contract {
    num1:number,
    num2:number
}
 
class Calculationn implements Contract {
    num1;
    num2;

    constructor(nums1:number , nums2:number) {
        this.num1 = nums1;
        this.num2 = nums2
    }
}

// Interface for functions:
interface myNewFunction  {
    (a:number , b:number):void
}

const mall:myNewFunction = function() {
    console.log('sale')
}

// Различия между type Aliases и Interface
/*
    Interface:               Aliases:
    Extends                
    merging                    union , intersection ( & )
    Implements ( classes )     Implements ( classes )
*/