// ----------------------- NUll & Undefined --------------------------------------------- //


/*
    В typescript существует мошный инструмент для проверки типов undefined И null.

    По умолчанию typescript отключает проверку данных на null | undefined и это дает возможность
    переобявить перемнные на другие типы данных.
    Чтобы включить его надо настроить tsconfig.json () и включить strictNullCheck
*/

/*
    let k:string = "12";
    k = undefined; // error k is string not undefined
*/


// Optional Chaining: ( ?. )
/*
    Optionla chaining это фитча js который луше работает для перехвата null.

    Он дает безобасны1 способ взять property обьекта который существует или несуществуюзий проперти.

    Когда нам нужна доступ к проперти мы можем использовать ?.
*/

const onjs:{[index:string]:string} = {};
console.log(onjs?.salom);


// NUllish CoalEscing: ( ?? - nullish operator )
/*
    Это позволяет писать выражения, имеющие резервный вариант специально для работы с null или undefined.

    Это полезно в тех случаях, когда в выражении могут встречаться другие ложные значения, которые, тем не 
    менее, остаются допустимыми.

    null | undefined должны писатся только в левом части
*/

function findNullish(num: null | undefined | number):null | undefined | number {
    return num ?? 12
}

// Null Assertion:
/*
    Null Assertition это такой оператор который уверяет ts что знаение точно не null | undefined.
*/