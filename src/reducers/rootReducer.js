import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { bankingReducer } from "./bankingReducer";


const rootReducer = combineReducers({
   auth: authReducer,
   banking: bankingReducer,
})