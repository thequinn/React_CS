/* 先做 LanguageContext.js */

import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const ThemeContext = createContext();

// Compare w/ the version of class comp ln-22
export function ThemeProvider(props) {

  // Using a custom hook, useToggleState()
  const [isDarkMode, toggleTheme] = useToggleState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
//--------------------------------------------------------
// From v-1, using context in a class comp
/*export class ThemeProvider extends Component {
   
  constructor(props) {
    super(props);
    this.state = { isDarkMode: false };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }

  render() {
    return (
      <ThemeContext.Provider
        value={ { ...this.state, toggleTheme: this.toggleTheme } }
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}*/