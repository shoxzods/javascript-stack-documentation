/*
  useSelector - используется для того чтобы брать данные из селектора.

  useDispatch - используется для того чтоыб задать reducer.
*/ 

import { useSelector , useDispatch } from "react-redux";

// Slicer
import { changeState, decrement, increment } from "./store/features/counter/counterSlice";
import { changeData } from "./store/features/user/userSlice";

export default function App() {
  const dispatch = useDispatch();
  
  // counter
  const counter = useSelector((state) => state.counter.counter );
  const name = useSelector((state) => state.counter.name );

  // user:
  const info = useSelector( (state) => state.user.info );

  function actions(action) {
    switch(action) {
      case "plus":
        return dispatch(increment())

      case "minus":
        return dispatch(decrement())

      case "change":
        return dispatch(changeState(action))
    }
  }

  function changes( name , values ) {
    const obj = {};
    obj[name] = values;
    dispatch(changeData(obj))
  }

  return (
    <>
      <p>{ counter }</p>
      <p>{ name }</p>

      <div>
        <p>{ info.age }</p>
        <p>{ info.first_name }</p>
        <p>{ info.last_name }</p>
      </div>

      <button onClick={(e) => actions(e.target.name)} name="plus">+</button>
      <button onClick={(e) => actions(e.target.name)} name="minus">-</button>
      <button onClick={(e) => actions(e.target.name)} name="change">change</button>

      <h1>Form:</h1>
      <form style={{ marginTop:"20px" , display:"flex" , flexDirection:"column" , maxWidth:"1200px" , gap:"10px" }}>
          <input onChange={(e) => changes(e.target.name , e.target.value) } name="first_name" type="text" />
          <input onChange={(e) => changes(e.target.name , e.target.value) } name="last_name" type="text" />
          <input onChange={(e) => changes(e.target.name , e.target.value) } name="age" type="number" />        
      </form>  

    </>
  )
}