import { createAsyncThunk } from "@reduxjs/toolkit";
import { createleaveServices, GetLeavesService, GetUserDeatilService } from "../services/leaveServices";

export const creteleaveasyncThunk = createAsyncThunk(
  "craeteLeave",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await createleaveServices(payload);

      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getLeavesThunk = createAsyncThunk(
  "showleaves",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetLeavesService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getUserDetailThunk = createAsyncThunk(
  "GetUserDetail",
  async (payload, { rejectWithValue }) => {
    try {
      console.log("payload------->", payload);
      const response = await GetUserDeatilService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);