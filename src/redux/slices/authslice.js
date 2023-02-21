import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
    token:null,
    useLoginStatus:null,
};

export const loginSlice =  createSlice({
    name:"auth",
    initialState,
    reducers:{
        removeToken:(state,action)=>{
        state.token=null;
        state.user=null;
                }
        },
    extraReducers:(builder) =>{
       
    },
})
export const {removeToken}= loginSlice.actions;
export const authState = (state) => state.authState;


export default loginSlice.reducer;