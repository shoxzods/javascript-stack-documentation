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