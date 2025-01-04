// themeContext.js
import React, { createContext, useReducer } from "react";

const themeContext = createContext();

const initialState = {
  darkMode: true, // Set default to dark mode
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {children}
    </themeContext.Provider>
  );
};

export { themeContext, ThemeProvider };
