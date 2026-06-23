// ------------------------------ useState Hook ------------------------------------ //

/*
    useState - используется для хранения данных чтобы использовать в jsx.
    каждый раз когда useState изменяется наш компоннет перередирится.

    useState() - имеет принимае два значения первый который хранит дату а второй его изменяет.

    useState( state  , setState ) = useState(data);

    useState - принимает любой тип данных.

*/

export default function App() {
    const [ number , setNumber ] = useState();

    function changeText() {
      const random_number = Math.round(Math.random() * 10);
      setNumber(random_number);
    }

    return (
      <>
        <p>{number}</p>
        <button onClick={changeText}>click</button>
      </>  
    )
}