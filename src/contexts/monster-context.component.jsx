// import { createContext, useReducer } from "react";

// export const MonstersContext = createContext({
//     addNewMonster: () => null,
//     monsters: null
// });


// const monstersReducer = (state, action) => {
//     console.log('Dispatch');
//     console.log(state.monsters);
//     const { type, newMonster } = action;
//     switch (type) {
//       case 'ADD': {
//         return {
//             monsters: [...state.monsters, newMonster]
//         }
//       }
//       default: {
//         throw new Error(`Unhandled action type: ${action.type}`)
//       }
//     }
// }

// // initial state
// const initialState = { 
//     monsters: []
// };

// export const MonstersProvider = ({children}) => {
//     const [{monsters}, dispatch] = useReducer(monstersReducer, initialState);

//     const addNewMonster = (monster) => {
//         dispatch({ type: 'ADD', newMonster: monster})
//     }
//     const value = {monsters, addNewMonster};
//     return <MonstersContext.Provider value={value}>{children}</MonstersContext.Provider>;
// }