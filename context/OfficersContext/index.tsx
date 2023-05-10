// import React, { createContext, useReducer } from "react";
// import defaultValue from "./defaultValue";
// import OfficersContextProps from "./type";

// export const OfficerContext = createContext(defaultValue);
// export const OfficerDispatchContext = createContext(null)
// export function OfficerProvider({ children }) {
//     const [officers, dispatch] = useReducer(
//       officersReducers,
//       [defaultValue]
//     );

//     return (
//       <OfficerContext.Provider value={officers}>
//         <TasksDispatchContext.Provider value={dispatch}>
//           {children}
//         </TasksDispatchContext.Provider>
//       </TasksContext.Provider>
//     );
// }

// function officersReducers(officers: OfficersContextProps, action) {
// switch (action.type) {
//     case 'added': {
//     return {
//       officers: [...officers.officers],
//       loading: officers.loading,
//       lastPostCounter: 0,
//     }
//     }
//     case 'loaded':{
//       return {
//         ...officers,
//         loading: false
//       }
//     }
//     case 'changed': {
//     return officers.officers.map(t => {
//         if (t.name === action.task.name) {
//         return action.task;
//         } else {
//         return t;
//         }
//     });
//     }
//     default: {
//     throw Error('Unknown action: ' + action.type);
//     }
// }
// }
