// ----------------------------------- Arrays ------------------------ //

// Array Type ( dataType[] )
/*
    для массивов используется Array Type ( dataType[] )
*/

const year:number[] = [ 12 , 3, 4 , 5]; // принимает только массив чисел


// readonly
/*
    readonly - это тип для array который запрешает изменение данных у array и используется переж Array Type;
*/

const years:readonly number[] = [ 12 , 3, 4 , 5]; // массив не может изменить свои значения

// union types for arrays:
const dataList: (number | string)[] = [ 12 , 'string' ];

// for single selection:
let separate: number[] | string[] = [ 12 , 23, 4]
separate = [ '12' , '23' , 'some'];


// literal types for arrays:
const selectableData: ('string' | 12 | false)[] = [12 , false , 'string'];


// Type Alias for Arrays:
type triple_data = (number | string | boolean);
const getTripleData:triple_data[] = [ 12 , "some text" , true , false ];

// Interface for Arrays:
interface my_interface  {
    [index: number]: number | string | boolean
};

const myArray:my_interface = [12 , 23, 10 , true , 'salom'];