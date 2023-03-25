import { AnyAction } from "redux";
import { MONSTER_ACTION_TYPES } from "./monster.actionTypes";
import { monsterAction, populateMonsters, addNewMonster } from "./monster.action";
import { Monster } from "../utils/types.utils";

export type ReducerState = {
  monsters: Monster[];
}

// initial state
const initialState:ReducerState = { 
  monsters: []
};


export const monstersReducer = (
  state = initialState, 
  action = {} as AnyAction
): ReducerState => {
  if(populateMonsters.match(action)) {
    return { monsters : action.payload }
  }

  if(addNewMonster.match(action)) {
    return { monsters: [...state.monsters, action.payload] }
  }

  return state;

}

// const { type, payload } = action;
// switch (type) {
//   case MONSTER_ACTION_TYPES.POPULATE_MONSTERS:
//     return { monsters : payload }
//   case MONSTER_ACTION_TYPES.ADD_MONSTER: 
//     return { monsters: [...state.monsters, payload] }
//   default: 
//     return state;
// }