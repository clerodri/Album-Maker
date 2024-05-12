import React, { createContext, useReducer } from "react";
import reducer, { initialState } from "./AlbumReducer";

export const AlbumContext = createContext();

export const AlbumProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AlbumContext.Provider value={{ state, dispatch }}>
      {children}
    </AlbumContext.Provider>
  );
};
