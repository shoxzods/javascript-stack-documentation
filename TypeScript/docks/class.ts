// Classes:


// Member Type ( methods , properties of Classes )
/*
    члены Класса (properties , methods) также пишутся с Type Annotation как у переменных
*/

class Parent {
    count:number = 12;
    age:number;

    constructor(oneAge:number) {
        this.age = oneAge;
    }

    Dog():number {
        return this.count
    }
}

// Members Visibility
/*
    public - ( default ) дает доступ из любого места
    private - дает права войти только пользоваетлям класcа
    protected - дает доступ только пользователям класса или из inheritance
*/

class Public {      // public ( access from everywhere )
    public name = 12;
}

class Private {           // private  ( access from itself )
    private number = 12
}

class Protected  {        // protected ( acces from itself or from inherited classes );
    protected password = 23;
}

// Parametr Properties:
/*
    paramter проперти дает возможность писать visibilty( private  , public , protected ) прямо в constructor параметрах
    
    constructor( visibilty num:number )
*/ 

class Parametrs {
    constructor (public num:number) {
        this.num = num;
    }
}

// readonly
/*
    Он отключает возможность измениея членов class ( methods , properties )
    также можно писать для параметров в constructor
*/

class Parents {
    readonly nums:number = 12;
    constructor (public numbers:number) {
        this.numbers
    }
}


// Implements
/*
    Это контракт между class и interface или type
*/

interface Contract { // interface + class
    num1:number,
    num2:number
}

class Calculationn implements Contract { // interface + class
    num1 = 12;
    num2 = 23;
}

type userContract = { // type + class
    first_name:string,
    last_name:string
}

class Contracts implements userContract { // type + class 
    first_name = 'React';
    last_name = "Next_Js"
}

// Inheritance ( extends )
/*
    Классы можно расширять через ключевое слово extends
*/ 

class FirstName {
    constructor( public name:string , public age:number ) {
        this.name = name;
        this.age = age;
    }
}

class LastName extends FirstName {
    showInfo() {
        return `full_name:${this.name} and age:${this.age}`
    }
}

// Override:
/*
    inherited классы имеют доступ к перзаписанию членов импортрованного класса.
    Это означает с одинаковыми названиями членами которые были inherit можно написать другие значения.

    В новых версиях typescript можно написать ключевое слово override
*/

class Animal {
    first_name:string = 'Home'
}

class Eggs extends Animal {
    override first_name = 'Promt';
}

// Abstarct Classes ( abstract )
/*
    у абстракт классов нельзя взять instanse ( новый обьект )
    можно использовать только в классах и в его дочерних классах.

    чтобы реализовать это надо поставить ключевое слово abstract перед class.
*/

abstract class Mops {
    num:number = 12;
}

class Mems extends Mops {
    open() {
        return this.num
    }
}

/*
    чтобы сделать члены калсса abstract надо применить ключевое слово abstract перед class
    и абстрактные члены можно применить значения только в дочерних кдассах
*/

abstract class Mem {
    abstract name:string;
}

class Memo {
    name = 'salom'
}