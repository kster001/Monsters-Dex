import { RootState } from "./store";
import { Monster } from "../utils/types.utils";

export const getMonsters = (state: RootState): Monster[] => {
    const monsters = state.monstersReducer.monsters;
    console.log("data:", monsters);
    return monsters;
}
