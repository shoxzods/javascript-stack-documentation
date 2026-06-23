// --------------------------- useReducer -------------------------------------------- //

/*
    useReducer - похоже как useState но отличие в том что , мы можем написать много логики внутри него.
    A useState тольео сохраняет данные.
*/

/*
    initialState - задает начальное значения для reducer:
    dispatch - задает команду для useReducer чтобы она выполнял команды dispatch
    dispatch - может хранить только два значения ( type - тип команды ,  payload - значения который мы хотим изменить ). 
    reducer - вся логика хранится внтури reducer и для if statement в осноном используется switch case ( рекомендуется ).

*/ 

const initialState = {
  count:0,
  color:'red'
};

function reducer( state , action ) {
    switch(action.type) {
        case 'increment':
            return {
              count: state.count + 1
            }

        case "countChange":
            return {
              ...state,
              count: action.payload
            }

        default:
          return state
    }
}

export default function App() {
  const [ state , dispatch ] = useReducer(reducer , initialState);

  function increment() {
    dispatch({
      type:"increment"
    });
  }

  function changeCount(e) {
    if ( isNaN(+e.target.value) ) {
      e.target.value = null;
      return
    }

    dispatch({
      type:"countChange",
      payload: +e.target.value
    })
  }

  return (
    <>
      <p>{state.count}</p>
      <input type="text" onChange={changeCount} />
      <button onClick={increment}>+</button>
    </>
  )
}