// --------------------------- useRef() ------------------------------------------------------------- //

/*
    useRef - в основном используется с DOM , и его значения хранится в рендерах и пока компоннета не
    реддерится его значения не изменится. Так как useRef() не подерживает re-render.
    useRef - в основном используется с useEffect() чтобы отслеживать lifeCycle;

    props ref = {state} - определяет какой елемнету надо применить dom. 
*/

// Измненеие стил через dom;
export default function App() {
  const color = useRef();

  useEffect( () => {
    color.current.style.color = "red";
  } , [] )

  return (
    <div ref={color}>
        Lorem.
    </div>
  )
}

// рендеринг useRef();
/*
    useRef() - не рендерится но сохраняет значения между рендерами.
*/

export default function App() {
  const color = useRef('red');
  const [ status , setStatus ] = useState(true);

  useEffect( () => {
    color.current = color.current === "green" ? "red" : "green";
  } , [status] );

  const changeColor = () =>
        setStatus( current => current ? false : true );

  return (
    <>
      <div ref={color}>
          {color.current}
      </div>
      <input onChange = {(e) => color.current = e.target.value } type="text" />
      <button onClick={changeColor}>click</button>
    </>
  )
}


/*
    мы через input изменяем значение но она не будет видна до того момента пока у на не ищменится status
    который при изменнении рендерится
*/ 