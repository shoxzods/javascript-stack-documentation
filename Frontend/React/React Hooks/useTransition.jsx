// ------------------------- useTransition -------------------------------------------------------- //

/*
    useTransition - помогает оставлять сайт респонсивным при высокой нагрзуке илм обновдении.

    Он выполняет действия котрые важные а менее важные запускать позже.
*/

/*
    isPending - отображается пока heavy update не отработается на startTransition

    startTransition - обвешивается для обределенного state;
*/ 

import { useTransition } from "react";
import { useState } from "react";

const data = [
    "Ali",
    "Vai",
    "Shoxzod"
];

export default function App() {
  const [ item , setItem ] = useState(data);
  const [ isPending , startTransition ] = useTransition();


  function search(e) {

    const text = e.target.value.trim().toLowerCase();
    const filtered = data.
                         filter( item => item.toLowerCase().includes(text));

    startTransition(() => setItem(filtered));
  }
  
  return (
    <>
        <input onChange={search} type="search" placeholder="...some text here" />
        <ul style={{border:"1px solid black" , maxHeight:"400px" , marginTop:"10px" , padding:"5px"}}>
            { isPending ? <p>...loading</p> :
                item.map(
              (i , index) => <li key={index}> <span>{index + 1}.</span> {i}</li>
            )}
        </ul>
    </>
  )
}