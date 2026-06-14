//--------------------------- Type Annotation------------------------------------------------------------------ //

// Type Anotation: ( 2 ways ):

/* Explicit: мы должный вручную дать типы переменных */
const month:number = 12;

/* Inference: тип автоматически дается на основе данного значение. */
const full_year = 2024;


// Explicit Simple Types:
/*
*Primitives:        *Object

string              object
number              () => dataType ( arrow functions )
null                    
undefined               
boolean                 
bigInt               
Symbol    
*/

// Special Types:

/* any - отключает type checking у ts ( можно записать любой тип даже при переобявлении ) 
   если обявить переменную но не указать значение то оно автоматически является типом any.
*/

let number:any = 12;
number = 'salom';

let anyType; // any
anyType = 12; // anyType:number


/* unknown - она используется для проверки type если тип неизвестен ( проверяется тип до использовании ) */ 
function checkValidate(randomSymbol:unknown):(undefined | string) {
    if ( typeof randomSymbol === "string" ) {
        return randomSymbol
    }

    return undefined
}




/*
never - означает что такой тип значение никогда не случится или нету
*/