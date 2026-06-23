// ---------------- React.memo ------------------------------------------ //

/*
    React.memo - обеспечивает child компоненту не перередирится если parent компоннета рендерится и рендерится тогда когда
    props функции которая была обернута в React.memo как HOC будет изментся то тогда рендерится.
*/

function Student({title}) {
  console.log('student-render')
  return (
    <p>{title}</p>
  )
}

const Render = memo(Student);

export default function App() {
  const [ status , setStatus ] = useState(true);
  const [ text , setText ] = useState('');
  console.log('re-render')
  return (
    <>
      <Render title={text} />
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
    Если не вложить компоненту Student в memo то при рендере App Student тоже рендерится и чтобы предотворить 
    это мы вложили его в memo и она будет рендерится тогда когда изменится props title.
*/