// ----------------------------------- Objects------------------------ //


// Object Type ( { name:dataType , age:dataType } )
/*
    для обьектов используется Object Type ({ name:dataType , age:dataType })
*/

const obj: { name:string , age:number }= {
    name:'salom',
    age:23
};


// Optional Property ({ name ?: string }) // если значение не передается то optional автоматически будет undefined
/*
    если проспустим property в обекте который мы указали в Object Type то у нас выводит ошибка:
    
    const obj:{ name:string , age:number } = {  // error age is missing
        name:"Farhod"
    }

    Чтобы устранить данное поведение мы используем Optional Propery.
    Optional Property - это проперти которые не надо указать в обьекте.
        
    const obj:{ name:string , age?:number } = {  // age is missing but we set optional for age.
        name:"Farhod"
    }
*/

const newObj: { name:number , age?:number } = {
    name:12
}

// Index Signature ( {[index: number | string ]:dataType } )
/*
    Если не указать данные в обьектах у нас произойдет ошибка.
    const obj = {}
    obj.number = 12; // error the object does not have number property

    Index Signatures используется для обетов даже если не имеет свойств:
    const obj: {[index: (string | number)]:dataType }
        obj[1] = 12;
*/

const emptyObj:{[index:string]:number}= {};
emptyObj.number = 12;