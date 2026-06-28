import { useSelector , useDispatch } from "react-redux";
import { increment, double , fetchUsers } from "./store/features/counterSlice";
import { useEffect } from "react";
import { useGetUsersQuery , useGetUsersByIdQuery , useCreateUserMutation } from "./store/api";

export default function App() {
    const count = useSelector( (state) => state.counter.count);
    const err = useSelector( ( state) => state.counter.error );
    const load = useSelector( ( state ) => state.counter.loading);
    const datas = useSelector( ( state ) => state.counter.data );

    // use Query:
    
    // all:
    const { data: allusers , isLoading, error} = useGetUsersQuery();

    // by id:
    const { data: userId , isLoading: loading } = useGetUsersByIdQuery(4);

    // post:
    const [ createUser ] = useCreateUserMutation();

     async function postData() {
      const result = await createUser({
        name: "John Doe",
        email: "john@mail.com",
        username: "johndoe"
      });

      console.log(result.data , result.error)
    }


    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchUsers());
    } , []);

    return (
      <>
        <p>{count}</p>
        <button onClick={() => {
            dispatch( increment() )
        }}>increment</button>
        <button onClick={() => {
          dispatch( double(+3) )
        }}>decrement</button>

        <div style={{border:"1px solid red"}}>
            { isLoading ? <p>...loading</p> 
                      : err ? err
                      : datas ? datas.map( user => <p key={user.id}>{user.name}</p> )
                      :""  
                    }
        </div>
      
        {/* GET method */}
        <div style={{border:"1px solid red" , marginTop:'10px'}}>
            { isLoading ? <p>...loading</p> 
                      : error ? error.message
                      : allusers ? allusers.map( user => <p key={user.id}>{user.name}</p> )
                      :""  
                    }
        </div>
        
        {/* GET method width paramatrs */}
        <div style={{border:"1px solid red" , marginTop:'10px'}}>
          <p>{ loading ? "loading" : userId?.name }</p>
        </div>
      
         {/* post */}

         <button onClick={postData}>send</button>
      </>
 
    )
}