import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchAll" , async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data
});

const counterSlice = createSlice({
    name:"counter",

    initialState: {
        count:0,
        data:[],
        loading:false,
        error:null
    },

    reducers: {
        increment: (state) => {
            state.count += 1
        },

        double: ( state , actions ) => {
            state.count *= actions.payload;
        }
    },

    extraReducers: ( builder ) => {
        builder.addCase( fetchUsers.pending , ( state ) => { state.loading = true })
               .addCase( fetchUsers.fulfilled , ( state , action ) => { state.loading = false , state.data = action.payload } )
               .addCase( fetchUsers.rejected , ( state , action ) => { state.error = action.error.message , state.loading = false } )
    }

});

export default counterSlice.reducer;
export const { increment , double } = counterSlice.actions;