// ------------------------ Basic Generics -------------------------------------------------------- //

/*
    Generics позволяют создать переменных типов которых можно использовать для создания class , function ,
    и type Alias и не указать тип данных она сама автоматически определяет тип данных:
*/

// functions:
/*
    function functionName <T>(дает тип автоматически для параметра num)(num:T):T( означает что return должна возврашать только num ) {
        return num
    }
    
    functionName <string>("12") // для <T> - мы можем назвать его string , можно и не писать  (inference)
*/ 
function generics<N>(num:N):N {
    return num
}
console.log(generics(12))


function genZ<N , Z>(num1:N , num2:Z):N {
    return num1
}

console.log(genZ<number , number>(12 , 23));


// Extends:
/*
    для generics добавляет limit типов.

    < T extends number | string >
*/

function calculation <T extends number , B extends number>( num1:T , num2:B ):number {
    return num1 + num2
}

calculation <number , number>( 2 , 3 )


function role <T extends 123 | "123" , B extends 0 | 12>( num1:T , num2:B ): number | string {
    return num1 as number + num2 as number
}

role <123 , 12>(123 , 12)


// Classes
class Parent <T , P> {
    calc:P;

    constructor(public number:T , p:P) {
       this.number = number;
       this.calc = p 
    }

    showPassword( str:P ):string {
        return this.number as string + str
    }

    getNumber():P {
        return this.calc
    }
}

const dom = new Parent<number , string>(12 , '12');
console.log(dom.showPassword('12'));
console.log(dom.getNumber());


// Default value:
/*
    <T = string>
*/

class Interfaces <T = string> {
    public logic:T | undefined;

    constructor(nums:T) {
        this.logic = nums
    }

    showInfo() {
        return this.logic
    }
}

console.log(new Interfaces('salem').showInfo())


// generics width interface
interface Inner <P> {
    number:P
}

const obj:Inner<number> = {
    number: 12
}

console.log(obj)


// generic width Alias type:
type numerics <M> = {
    full_name: M
}

const objects:numerics<string> = {
    full_name: 'Primov SHoxzod'
}