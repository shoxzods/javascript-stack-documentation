// Functions:

// Return Types ( ():number => 12 ):
/*
    для результата функции можно указать dataType ( для return ):

    function Index():number {
        return 12
    }
*/

function Index():number {
    return 12
}


// Void Return Type: ( ():void => console.log('salom') )
/*
    используется если функция не имеет return

    function Index(): void {
        console.log('...Some Text')
    }
*/

function NoReturn():void {
    console.log('salom')   
}

//  Parametrs: ( (x:string) => x )
/*
    Для параметров функции также надо указать тип данных

    function(age:number , b:string) {}
*/ 

function Plus(age:number , b:string) {
    return age + b
}

// Optional Paramters ( ( x ?:number ) => 'some text') -> // если значение не передается то optional автоматически будет undefined
/*
    По умолчанию у функции в ts должны вызватся все парметры.
        function Maths( num:number , param:string ) {
            return num
        } // error the param is not defined

    Чтобы устранить такую проблему мы должны использовать optional paramters:
     function Maths( num:number , param?:string ) {
            return num
      }

*/

function Maths(num:number , param?:string) {
    return num 
}


// default paramters: ( ( x:number = 12 ) => x )
/*
    в ts также используется default параметры но она должны писатся полсе type Annotation
*/

function DefaulParametr( num:number = 12 ) {}


// named paramters ( ({ num , age } : { num:number , age: number} ) )

function NamedProperties({num , age} : { num:number , age:number }) {}


//  Rest Paramters: ( (...rest: number[] ) =>  )
/*
    Так как ...rest парметры возврашают array для type мы должны указать Array Type( DataType[] )
*/


// arrow function type ( () => datayType | void )

/* 
    для функции arrow function существует специальны Type Annotation
*/

const x: () => void = () => 12

// Alias types: ( Aliases нельзя использовать для expression functions )
type aliases = (num:number) => number;
const myFuncs:aliases = (num) => num;

// Interface: ( Interface нельзя использовать для expression functions )
interface myINterface {
    (a?:string , b?:string):void
}

const newFunction:myINterface = function(a , b) {
    console.log('sakm')
}

newFunction()