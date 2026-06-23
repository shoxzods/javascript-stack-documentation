// --------------------------- useMemo ------------------------------------------------------- //

/*
    useMemo - это hook для оптимизации она в основном используется для сложных вычислений.

    useMemo - кеширует данные и возвращает значение.

    У useMemo() существует dependecy который скажет useMemo рендерить или нет.
*/


export default function Math() {
    const [color , setColor] = useState(true);
    const [text , setText] = useState('');


  const change = useMemo( () => {
        for(let i = 0; i < 1000000000; i++) {};
        return text
  } , [text] )

    function changeColor() {
      setColor( current => current ? false : true );
    }

    return (
        <>  
            <p style={{color:color ? 'red' : 'green'}}>{change}</p>
            <input type="text" onChange={(e) => {
              setText(e.target.value)
            }} />
            <button onClick={changeColor}>color</button>
        </>
    )
}


// Если не использовать useMemo() - то при каждом рендере функция коорый вычисляет тяжелый вычисление переиспольщуется несколько раз