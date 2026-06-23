// --------------------------------- LifeSycle and useEffect --------------------------------- //

/*
    useEffect - используетя чтобы работать с sideEffect тами компонента к примеру она полезна при перерендрирование
    компоннета , она управляет и решает надо ли рендер для useEffect елси есть dependancy
*/

// LifeSycle
/*
    Это жизненный цикл - это этапы сушествования компоннета от создания до удаления.

    mount - компонент создлается и появляется на странице
    updating - компоннет обновляется при измении props и state
    unmounting - удаляется со страницы.
*/

/*
    useEffect - в основном используется с таймерами , c APi запросами и конечно с DOM.
    если не испольщовать useEffect при каждом рендере компоннента цикл идет в бесконечность.

    чтобы предотвротить это useEffect() использует dependancy , который запускает useEffect() если изменится dependacny

    1. [] -  запускает только один раз
    2. [dependacny] - если изменится props или state.
*/

// []

export default function App() {
    const [ number , setNumber ] = useState(12);

    useEffect(() => {
      console.log('salom'); // работает только один раз
    }, []);

    function changeText() {
      setNumber(Math.round(Math.random() * 10));
    }

    return (
      <>
        <p>{number}</p>
        <button onClick={changeText}>click</button>
      </>  
    )
}


// [props | state]
export default function App() {
    const [ number , setNumber ] = useState(12);

    useEffect(() => {
      console.log('salom'); // работает только когда изменится number
    }, [number]);

    function changeText() {
      setNumber(Math.round(Math.random() * 10));
    }

    return (
      <>
        <p>{number}</p>
        <button onClick={changeText}>click</button>
      </>  
    )
}