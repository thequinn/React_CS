import React, { Component } from 'react';
import { ThemeContext } from "./contexts/ThemeContext";

export default class PageContext extends Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkMode } = this.context;

    const styles = {
      backgroundColor: isDarkMode ? "black" : "AliceBlue",
      height: "100vh",
      width: "100vw"
    };

    return <div style={styles}>{this.props.children}</div>
  }
}