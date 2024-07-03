import { combineReducers } from "redux";
import {formReducer} from "./formReducers";

const rootReducer = combineReducers({formReducer})

export {rootReducer};