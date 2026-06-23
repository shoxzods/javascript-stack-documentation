// -------------------------------- Type Guards ----------------------------------------- //

/*
    Type Guards - обеспесивает тип безопасность предоставляя явные проверки , определяющий конкретный тип 
    переменной во время выполнения.
*/

// typeof
/*
    typeof - оператор которые проверяет тип значения примитивных типов.
*/

function Index( age:unknown ): number | undefined {
    if ( typeof age == "number" ) {
        return age
    }

    return undefined
}

console.log(Index(23)) // undefined


// instanceof

/*
 Оператор instanceof определяет , является ли обьект экземпляр определенного класса или функиции конструктора.
*/

class Method {
    constructor(public age:number) {
        this.age;
    }
}

type multi = number | undefined;

function indexes( obj: Partial<{age:number}> ):multi {
    if ( obj instanceof Method )
        return obj.age

    return undefined
}

console.log(indexes(new Method(12)));


// Discriminated Types:

/*
    Дискриминированные объединения (также известные как помеченные объединения) 
    используют общее свойство (дискриминант) для различения различных типов объектов в объединении.
*/

interface First {
    name: "Primov",
    age: 23
}

interface Second {
    age: 12,
    name:"Shoxzod"
}

function Map(obj: First | Second): number | string {
    switch(obj.age) {
        case 12:
            return obj.name
        
        case 23:
            return obj.name
    }
}

console.log(Map({age:12 , name:"Shoxzod"}))


// Оператор in:
/*
    Опертаор in проверяет является зкщзукен или method членом обьекта.
*/

function findMethod( obj:{ bark():string } | {meow():string}):string {
    if ( "bark" in obj ) {
        return obj.bark()
    }

    return obj.meow()
}


// User Defined Type Guards:

/*
    Для более сложной проверки типов можно создавать пользовательские функции проверки типов, используя предикаты типов.

    Это функции, которые возвращают предикат типа в форме parameterName is Type.

    objs is Type === boolean
*/

interface type1 {
    num:number,
    age:number
}

interface type2 {
    num:number,
    age:number,
    type:string
}

function Messi(obj:type1 | type2):obj is type1 {
    if ( !(obj as type2).type )
        return false

    return true
}

console.log(Messi({ num:12 , age:23 , type:'salem' }));


// Assertion Type:
