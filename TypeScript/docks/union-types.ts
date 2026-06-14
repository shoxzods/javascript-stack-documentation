// ------------------------- TypeScript Union Types ------------------------------------- //

/*
    Union types используются если для значение можеть иметь более одного типа данных.
*/

// Union | ( OR ) :
/*
    для этого используется этот знак: | 
*/

let nums: number | string | boolean = 12; // nums теперь принимает number , string и boolean типы
nums = true;


interface func {
    (a:number , b:string):void
}

const x:func = function( a , b ) {
    return a + b
}

console.log(x(12 , "12"))