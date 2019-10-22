import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import { ThemeContext } from "./contexts/ThemeContext";

class Navbar extends Component {

  static contextType = ThemeContext;

  render() {
    //console.log(this.context);
    const { isDarkMode, toggleTheme } = this.context;

    // "classes" is now part of "props".  
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position='static' color={isDarkMode ? "default" : "primary"}>
          <Toolbar>
            
            <IconButton className={classes.menuButton} color='inherit'>
              <span>🇫🇷</span>
            </IconButton>
            
            <Typography className={classes.title} variant='h6' color='inherit'>
              App Title 
            </Typography>
            
            {/* The switch button will be used to toggle dark/light theme  */}
            <Switch onChange={toggleTheme}/>
            
            <div className={classes.grow} />

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              {/* There are 2 classes, root and input.  One of them goes to the parent of our input, and the other one will go to the actual input.  So when you use <InputBase/>, there is more than 1 elem added to HTML DOM.  */}
              <InputBase
                placeholder='Search...'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

// This is how we actually use the "styles" from NavBarStyles.js.  In ln-20, now inside the props, we have "classes". 
export default withStyles(styles)(Navbar);
