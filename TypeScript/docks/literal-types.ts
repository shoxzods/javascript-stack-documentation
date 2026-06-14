// ---------------------------------- Literal Types --------------------------------------------------- //

/*
    Литеральные типы это типы TS которые позволяют указывать точные значения , которые могут содержать переменные ,
    обеспечивая точность чем обшее типы таких как ( string , number , boolean ).

    То есть если указать значения типов литерала мы не можем указать другие значения только из списка Литераов.
    let pass: 12 | 'opens';

    let pass = 34 // error 34 is not assignable to literal types
*/

// Имеется три вида литеральных типов. ( boolean , number , string );

let StringLiteral:'string'; // string literal types
StringLiteral = 'string';

let NumberLiteral:12; // number literal types
NumberLiteral = 12;

let BooleanLiteral:true; // boolean literal types
BooleanLiteral = true;

// Литеральные типы в основном используются с Union типами.
let passwords: true | "password" | 1234;
passwords = true;
passwords = "password";
passwords = 1234;


// Использование литеральных типов  в параметрах функции и для значения который возврашает тип в return ;
function showPassword(passKey: 123 | "noframe" | false ):123 | false | "noframe" {
    return passKey // only 123 | noframe | false is assignable
}

// Использование дитеральных типов в обьектах
const obj:{ num ?: '12' | 12 } = {}; // num может вызять только 12 или '12'