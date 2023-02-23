import { createSlice } from "@reduxjs/toolkit";
import { THUNK_STATUS } from "../../utils/constants/redux.constant";
import { getLeavesThunk, getUserDetailThunk } from "../asyncThunk/leaveasyncThunk";


const initialState = {
  leaveslist: [],
  userDetail:[],
  status: {},
  leaveCount: 0,
};

export const LeaveSlice = createSlice({
  name: "leave",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLeavesThunk.pending, (state, action) => {
      state.status = THUNK_STATUS.LOADING;
    });

    builder.addCase(getLeavesThunk.fulfilled, (state, action) => {
      state.status = THUNK_STATUS.SUCCESS;

      state.leaveCount = action.payload.data?.count
      state.leaveslist = action.payload.data?.results;
    });
    builder.addCase(getLeavesThunk.rejected, (state, action) => {
      state.status = THUNK_STATUS.FAILED;
    });
    ///      status List builder function

    builder.addCase(getUserDetailThunk.pending, (state, action) => {
      state.status = THUNK_STATUS.LOADING;
    });

    builder.addCase(getUserDetailThunk.fulfilled, (state, action) => {
      state.status = THUNK_STATUS.SUCCESS;
      state.userDetail = action.payload.data?.results;
    });
    builder.addCase(getUserDetailThunk.rejected, (state, action) => {
      state.status = THUNK_STATUS.FAILED;
    });

  },
});

// export const appointmentState = (state) => state.appointmentState;

export default LeaveSlice.reducer;
