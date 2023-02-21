import { createAsyncThunk } from "@reduxjs/toolkit";
import { createleaveServices } from "../services/leaveServices";

export const creteleaveasyncThunk = createAsyncThunk(
    "dateLeave",
    async (payload) => await createleaveServices(payload)
);