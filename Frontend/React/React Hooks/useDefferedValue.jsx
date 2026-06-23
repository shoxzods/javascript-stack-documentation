// ------------------------------ useDefferedValue -------------------------------- //

/*
    useDeferredValue - откладывает обвновления значения после Heavy update а если просто испольщовать значение
    в больших данных Значение зависает и сработает мгновенно.
*/ 


import { useDeferredValue, useState } from "react";


const data = [ "shoxzod" , "primov" , 'qalesan' ];

export default function App() {
  const [ text , setText ] = useState(data);
  const [ bool , setBool ] = useState('');
 
  function Data() {
    for(let i = 0; i < 100000000; i++) {}
    return data
  }


  const defferedValue = useDeferredValue(bool);

  return (
    <>
    <ul>
      {Data().map(
        ( item , index ) => <li key={index}>{item}</li>
      )}
    </ul>
    <input type="text" onChange={(e) => {
        setBool(e.target.value);
    }} />
        <p>{bool}</p>
    </>
  )
}