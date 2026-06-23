// ------------------------------ Async Programming --------------------------  //

/*
    typescript расщирил js ассинхроности с статическими типами , сделая ващ ассинхронный 
    код более предсказуемым и явным.
*/

// Promise в TS:
/*
    Promise<T> представляет ассинхронную операцию который будет совершенна с тпами T или вывести ошибку с типами any.
*/

// key points
/* 
    Promise<T> - генерик T тип с определнным значением
    Promise<void> - для промисы которые не возвращают value
    Promise<never> - для промисы которые никогда не выполняются
*/


function myPromise<M>(x:M):Promise<number | string> {
    return Promise.resolve(x)
          .then( res => res )
          .catch( err => err.message )
}

console.log(myPromise<number>(12))


// Async / Await
/*
    TypeScript async / await синтаксис дает возмодность работать с Promis-ами более чисто и безопасно
*/

interface myGroup {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Partial< {street:string , suite:string , city:string , zipcode:string , geo:object}> ,
    phone: string,
    website: string,
    company: Partial<{ name: string, catchPhrase: string, bs: string }>
}

async function usePromise():Promise<myGroup[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data:myGroup[] = await res.json();
    console.log(data)
    return data
}

// usePromise();


// Error Handling:

const x:number = 12;
try {
    if ( typeof x == "number" ) {
        throw new Error( "the type is not assignable to string" )
    }
} catch ( err ) {
    if ( err instanceof Error ) {
        console.log(err.message)
    }
}