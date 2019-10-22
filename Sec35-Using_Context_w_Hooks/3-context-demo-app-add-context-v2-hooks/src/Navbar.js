import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";

// Stays the same
import { ThemeContext } from "./contexts/ThemeContext";

// Using HOC w/ Context.Consumer in a class comp 
//import { withLanguageContext } from "./contexts/LanguageContext";
//
// Using context w/ hooks in a functional comp
import { LanguageContext } from "./contexts/LanguageContext";

const content = {
  english: {
    search: "Search",
    flag: "🇬🇧"
  },
  french: {
    search: "Chercher",
    flag: "🇫🇷"
  },
  spanish: {
    search: "Buscar",
    flag: "🇪🇸"
  }
};

//class Navbar extends Component {
function Navbar(props) {

  // Using context in a class comp
  //const { isDarkMode, toggleTheme } = this.context;
  //
  // Using context w/ hooks in a functional comp
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  // Using context passed thr HOC in a class comp
  //const { language } = this.props.languageContext;
  //
  // Using context w/ hooks in a functional comp
  // We can reuse useContext() to access multiple contexts !! 
  const { language } = useContext(LanguageContext);

  //const { classes } = this.props;  // "this" is used in a class comp
  const { classes } = props;
  
  const { search, flag } = content[language];
  
  //render() {
  return (
    <div className={classes.root}>
      <AppBar position='static' color={isDarkMode ? "default" : "primary"}>
        <Toolbar>
          <IconButton className={classes.menuButton} color='inherit'>
            <span>{flag}</span>
          </IconButton>
          <Typography className={classes.title} variant='h6' color='inherit'>
            App Title
          </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={`${search}...`}
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
  //}

}

// No need to do anything to this version of Navbar when using context w/ hooks in a functional comp
export default withStyles(styles)(Navbar);
//
// Using HOC w/ Context.Consumer in a class comp
//export default withLanguageContext(withStyles(styles)(Navbar));

