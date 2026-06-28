import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    
    name:"counter",
    
    initialState: {
        counter:0,
        name:""
    },

    reducers: {
        increment: (state) => {
            state.counter += 1;
        },

        decrement: ( state ) => {
            state.counter -= 1;
        },

        changeState: ( state , action ) => {
            state.name = action.payload
        }
    }
});

export const { increment , decrement , changeState } = counterSlice.actions;
export default counterSlice.reducer;