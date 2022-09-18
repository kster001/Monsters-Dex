import { MONSTER_ACTION_TYPES } from "./monster.types";

export const createAction = (type, payload) => ({ type, payload });

export const populateMonsters = (monsters) => 
    createAction(MONSTER_ACTION_TYPES.POPULATE_MONSTERS, monsters);

export const addNewMonster = (monster) => 
    createAction(MONSTER_ACTION_TYPES.ADD_MONSTER, monster);
