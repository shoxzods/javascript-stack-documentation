import { userStore } from "../store/userStore";

export default function Info() {
    const count = userStore.getState().count;
    return (
        <>
            <p>{count}</p>
            <button onClick={() => userStore.setState({count:1000})}>click</button>
        </>
    )
}