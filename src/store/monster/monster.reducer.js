import { MONSTER_ACTION_TYPES } from "./monster.types";

// initial state
const INITIAL_STATE = { 
  monsters: []
};


export const monstersReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      case MONSTER_ACTION_TYPES.POPULATE_MONSTERS:
        return { monsters : payload }
      case MONSTER_ACTION_TYPES.ADD_MONSTER: 
        return { monsters: [...state.monsters, payload] }
      default: 
        return state;
    }
}

