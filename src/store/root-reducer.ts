import { combineReducers } from "redux";
import { monstersReducer } from "./monster.reducer";

export const rootReducer = combineReducers({
    monstersReducer,
});