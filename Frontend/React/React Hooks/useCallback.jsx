// --------------------------- useCallback ------------------------------------------------ //

/*
    useCallback - испольщуется для оптимизации функции , в основном он применяется как props для child Component.
    чтобы child елемент не рендерился при рендиринге Parent компоненет.
*/


function Student({box}) {
  console.log('student-render')
  return (
    <>
      <p>{box()}</p>
    </>
  )
}

const Render = memo(Student);

export default function App() {
  const [ status , setStatus ] = useState(true);
  const [ text , setText ] = useState('');
  
  const salom = useCallback(() => {
      return text
  } , [text]);

  return (
    <>
      <Render box={salom} />
      <button onClick={() => {
        setStatus( current => current ? false : true )
      }}>click</button>

      <input type="text" onChange={(e) => {
          setText(e.target.value)
      }} />
    </>
  )
}

/* 
Если мы не привяжем нашу функцию salom то компонента Student перередитирся каждый раз когда Parent рендерится.

и теперь child компонента будет редерится тогда когда text изменится через input.
*/