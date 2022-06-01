import { createContext } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE = {darkmode: true };

const themeReducer = (state, action) => {
  switch(action.type) {
    case "TOGGLE":
      return {darkMode:!state.darkMode};
      default:
        return state;
  }
}