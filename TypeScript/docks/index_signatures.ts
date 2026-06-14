// ---------------------------------------- Index Signatures ----------------------------------------------------------- //

/*
    Индексные сигнатуры предоставляет мощный способ определения типов в обьекте с динамическими
    именами свойств , обеспечивая при этом типобезопасность

    [index: number | string]:datatypes
*/

interface forObjects {
    [index:string | number]:string | number | undefined;
}

const obj:forObjects = {
    [1]:12,
    age:23
};

const score: {[index:number]:any} = {
    1:12,
    2:23
}


// readonly:
/*
    для индексной сигнатруы мы можем установить кллючевое слово readonly
    который делает property не заменяемым.
*/

const newObj:{ readonly [index:number]:string | number} = {
        0:12,
        1:23
};

// newObj[0] = 23 - error the index signature is readonly