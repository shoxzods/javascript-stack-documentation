import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",

    initialState: {
        info: {
            first_name:"",
            last_name:"",
            age:"",  
        }
    },

    reducers: {
        changeData: (state , action) => {
            state.info = {
                ...state.info,
                ...action.payload,
            }
        }
    }
});

export const { changeData } = userSlice.actions;
export default userSlice.reducer;