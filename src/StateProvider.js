import React, { createContext, useContext, useReducer } from 'react';

// Initializing the StateContext
export const StateContext = createContext();

// Wraping our app and providing the Data layer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the Data layer
export const useStateValue = () => useContext(StateContext);
