<!--------------------------------- React Redux Toolkit -------------------------------------------->

redux-toolkit - это упрошенный вариант react redux который отвечает за управление глобальных state используется для
state management.

у нас сущ несколько библиотек для state-managemnt:
и самые популярные это redux-toolkit и zustand.

redux-toolkit используется для enterprise приложений для больших проектов.


file structure:

scr/
    store/
        store.js
        api.js
            features/
                counterSlice.js


// store.js:
<!-- 
    configureStore собирает весь Slice Names и дает для main чтобы расположить его глобально
    через Provider.
 -->


import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

const store =  configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default store;


// main.jsx:
<!-- 
    Provider сделает все глобальным store который был импортирован из store.js
    распологается в porps store.
 -->

import { Provider } from "react-redux";
import store from "./store/store";

import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store} >
        <App />
    </Provider>
)


// counterSlice:
<!-- 
    весь логика пришется внутри Slice папки.

    createSlice - создает отдельный slice для каждой slice:
        initialState - задает начальное значение.

        reducers - принимает только логику.
        state - дает доступ к initalState
        actions ( payload ) - дает возможность щадать занчание через любой файл.

 -->

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",

    initialState: {
        count:0
    },

    reducers: {
        increment: (state) => {
            state.count += 1
        },

        double: ( state , actions ) => {
            state.count *= actions.payload;
        }
    }
});

export default counterSlice.reducer; // идет в store.js
export const { increment , double } = counterSlice.actions; // к jsx файлам.


// App.jsx:
<!-- 
    useSelector - дает возможность брать initialState из Slice.js файлов.
    useDispatch - использовать импортированные actions из slice.js файлов.
 -->


import { useSelector , useDispatch } from "react-redux"; // redux
import {  increment, double } from "./store/features/counterSlice"; // берем из counterSlice.js

export default function App() {
    const count = useSelector( (state) => state.counter.count);

    const dispatch = useDispatch();
    return (
      <>
        <p>{count}</p>
        <button onClick={() => {
            dispatch( increment() )
        }}>increment</button>
        <button onClick={() => {
          dispatch( double(+3) )
        }}>decrement</button>
      </>
    )
}


// AsyncTkunk:

import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


<!-- 
    "users/fetchAll"  === action.type;

    если задан action.type то action.payload приходит автоматически из createAsyncThunk котрый дата пришел из return;


    addCase - Добавляет кейс чтобы добавить pending , fullified , rejected;
 -->
export const fetchUsers = createAsyncThunk("users/fetchAll" , async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data
});

const counterSlice = createSlice({
    name:"counter",

    initialState: {
        data:[],
        loading:false,
        error:null
    },

    extraReducers: ( builder ) => {
        builder.addCase( fetchUsers.pending , ( state ) => { state.loading = true })
               .addCase( fetchUsers.fulfilled , ( state , action ) => { state.loading = false , state.data = action.payload } )
               .addCase( fetchUsers.rejected , ( state , action ) => { state.error = action.error.message , state.loading = false } )
    }

});

export default counterSlice.reducer;



// App.jsx:

import { useSelector , useDispatch } from "react-redux";
import { fetchUsers } from "./store/features/counterSlice";
import { useEffect } from "react";

export default function App() {
    const error = useSelector( ( state) => state.counter.error );
    const loading = useSelector( ( state ) => state.counter.loading);
    const data = useSelector( ( state ) => state.counter.data );

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchUsers())
    } , [])

    return (
        <div style={{border:"1px solid red"}}>
            { loading ? <p>...loading</p> 
                      : error ? error
                      : data ? data.map( user => <p key={user.id}>{user.name}</p> )
                      :""  
                    }
        </div>
    )
}


// RTK Query используетс вместо fetch / axios ( library ) - redux own fetching tools:


// api.js:

import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath:"api",
    
    // base url:
    baseQuery:fetchBaseQuery(
        { 
            // base url:
            baseUrl: 'https://jsonplaceholder.typicode.com',
            
            // headers:
            prepareHeaders: (headers) => {
                headers.set("Authorization" , 'Bearer 123')
                
                return headers
            }
        }),


    // endpoints
    endpoints: (builder) => ({
        // get:
        getUsers: builder.query({
            query: () => "/users"
        }),

        // get:
        getUsersById: builder.query({
            query: (id) => `/users/${id}`
        }),

        // post:
        createUser: builder.mutation({
            query: (newUser) => ({
                url:"/users",
                method:"POST",
                body: newUser
            })
        }),

        // delete
        deleteUser: builder.query({
            query: (id) => `/users/${id}`
        }),

        updateUser: builder.mutation({
            query:({id , newData}) => ({
                url:`/users/${id}`,
                body: newData,
                method:"PUT"
            })
        })
    })
});

export const { useGetUsersQuery , useGetUsersByIdQuery , useCreateUserMutation , useDeleteUserQuery , useUpdateUserMutation } = api;



// store.js:

import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";

const store =  configureStore({
    reducer: {
        [api.reducerPath]: api.reducer
    },

    middleware: (getDefault) => getDefault().concat(api.middleware)
});

export default store;


App.jsx:

// use Query:

export default function App() {

import { useGetUsersQuery , useGetUsersByIdQuery , useCreateUserMutation } from "./store/api";

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


    return (
        <>
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



// localstorage  ( redux-persist )

<!-- npm i redux-persisit: -->

store.js:

<!-- persistor -->
import {persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";

<!-- configurator -->
import { configureStore } from "@reduxjs/toolkit";

<!-- slicer -->
import counterReducer from "./features/counterSlice";

const persistConfig = {
    key:"index",
    storage
};

const persistedReducer = persistReducer( persistConfig , counterReducer );

export const store =  configureStore({
    reducer: {
        counter: persistedReducer,
    },

    middleware: (getDefault) => getDefault({ serializableCheck:false })
});

export const persistor = persistStore(store);


// main.js:

import { Provider } from "react-redux";

<!-- persistor: -->
import { store , persistor }  from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <Provider store={store} >
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)
