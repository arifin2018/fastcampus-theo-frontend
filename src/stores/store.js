import { combineReducers } from "redux";
import { userReducer } from "./user";

export const store = combineReducers({
    user: userReducer
});