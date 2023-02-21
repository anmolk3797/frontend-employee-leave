import { combineReducers } from "redux";
import authslice from "./authslice";
import LeaveSlice from "./leaveSlice";

export default combineReducers({
  auth: authslice,
  leave:LeaveSlice
});
