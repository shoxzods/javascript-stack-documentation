// keyof - это ключевое слово которое копирует key типы из обьектов.

/*
    keyof - это ключевое слово которое копирует key типы из обьектов.
    keyof - создает union типов состоящих из литералов из ключей обьектов.
*/

interface numbers {
    age:number, 
    full_name:"Shoxzod",
    12:number
};

const user_profile: keyof numbers = 12; // "age" | "full_name" | 12



// keyof с index сигнатруами.
/*
    В индекс типах нам не известо какой литерал тип будет для ключа index и поэтому мы само можем ввести тип который совпадает с index значением.

*/ 

type emptyIndex = {
    [index:number | string | symbol]:boolean,
};

const my_number: keyof emptyIndex = 12;

