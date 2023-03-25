import { MONSTER_ACTION_TYPES } from "./monster.actionTypes";
import { Monster } from "../utils/types.utils";
import { createAction, Action, ActionWithPayload, withMatcher } from "./monster.actionTemplate";

export type PopulateMonsters = ActionWithPayload<MONSTER_ACTION_TYPES.POPULATE_MONSTERS, Monster[]>

export type AddNewMonster = ActionWithPayload<MONSTER_ACTION_TYPES.ADD_MONSTER, Monster>

export type monsterAction = PopulateMonsters | AddNewMonster;

export const populateMonsters = withMatcher((monsters: Monster[]): PopulateMonsters => 
    createAction(MONSTER_ACTION_TYPES.POPULATE_MONSTERS, monsters));

export const addNewMonster = withMatcher((monster: Monster): AddNewMonster => 
    createAction(MONSTER_ACTION_TYPES.ADD_MONSTER, monster));
