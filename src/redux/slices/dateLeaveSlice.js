import { createSlice } from "@reduxjs/toolkit";
import { THUNK_STATUS } from "../../utils/constants/redux.constant";
import { dateLeaveThunk } from "../asyncThunk/leaveasyncThunk";


const initialState = {
  dateLeaveNames: [],
  status:{}
};

export const dateLeaveSlice = createSlice({
  name: "dateLeave",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(dateLeaveThunk.pending, (state, action) => {
      state.status  = THUNK_STATUS.LOADING;
    });
    
    builder.addCase(dateLeaveThunk.fulfilled, (state, action) => {
      state.status = THUNK_STATUS.SUCCESS;
      state.dateLeaveNames = action.payload.data;
    });
    builder.addCase(dateLeaveThunk.rejected, (state, action) => {
      state.status = THUNK_STATUS.FAILED;
    });
    ///      status List builder function

  },
});

// export const appointmentState = (state) => state.appointmentState;

export default dateLeaveSlice.reducer;
