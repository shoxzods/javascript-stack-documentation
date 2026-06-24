import { userStore } from "../store/userStore";

export default function Counter() {
  const count = userStore((state) => state.count);
  const increment = userStore( (state) => state.increment);
  const changeNumber = userStore( (state) => state.changeNumber);
  const getCount = userStore( (state) => state.getCount );

    return (
        <div style={{background:"silver" , padding:"5px"}}>
            <p>{count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={() => changeNumber(12) }>change</button>

            <p>{getCount()}</p>
        </div>
    )
}