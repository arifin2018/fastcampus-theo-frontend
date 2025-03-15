import { combineReducers } from "redux";
import { userReducer } from "./user";
import { counterReducer } from "./counter";
import { cartReducer } from "./cart";

export const store = combineReducers({
    user: userReducer,
    counter: counterReducer,
    cart: cartReducer
});