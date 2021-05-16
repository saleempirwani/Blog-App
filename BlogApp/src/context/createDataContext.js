import React, {createContext, useReducer} from 'react';

export default (reducer, actions, init) => {
  const Context = createContext();

  // GLOBAL STATE PROVIDER
  const Provider = ({children}) => {
    // APP REDUCER
    const [state, dispatch] = useReducer(reducer, init);

    let boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{state, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };

  return {Context, Provider};
};
