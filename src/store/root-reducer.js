import { combineReducers } from "redux";
import { monstersReducer } from "./monster/monster.reducer";

export const rootReducer = combineReducers({
    monstersReducer,
});