import { userStore } from "../store/userStore";

export default function Fetching() {
    const isSubmitting = userStore( ( state ) => state.isSubmitting );
    const changeUserData = userStore( (state) => state.changeUserData );

    function changeData(e) {
        if ( e.target.name == 'name' )
            return changeUserData({ name: e.target.value });
        
        changeUserData({ password: e.target.value });
    }

    return (
        <form onSubmit={isSubmitting}>
            <input onChange={changeData} name="name" type="text" placeholder="...text" />
            <input onChange={changeData} name="password" type="password" placeholder="...password" />
            <button type="sumbit">send</button>
        </form>
    )
}