import { createSlice } from "@reduxjs/toolkit";



const user = createSlice({
    name: 'user',
    initialState: {
        userInfo: [],
    },
    reducers:{
        userCurrent: (state, action)=>{ 
            state.userInfo = action.payload;
        }
    },
})




const {reducer , actions} = user;
export const {userCurrent } = actions;
export default reducer;