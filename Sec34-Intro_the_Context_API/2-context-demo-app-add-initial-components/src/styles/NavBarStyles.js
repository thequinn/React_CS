import { fade } from "@material-ui/core/styles/colorManipulator";

// Functional Comp
const styles = theme => ({  
  root: {
    width: "100%",
    marginBottom: 0
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    // ice way of showing and hiding contents:

    // It starts w/ not showing on extra small or small sizes
    display: "none",
    // CSS Media Queries: theme.breakpoints.up(key)
    // - Whatever style in here will apply from the "sm" breakpt and up. When the theme (ln-4) is at least "sm", display style is "block", if it's below "sm", it should not show at all.
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,

    // See ln-1, import { fade } from '@material-ui/core/styles/colorManipulator';
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    // Breakpoints enables the use of breakpoints in a wide variety of contexts
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    // When you shrink down the webpage, the input search becomes width:100%
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      // The input search grows to width:200 when you click on it
      "&:focus": {
        width: 200
      }
    }
  }
});

export default styles;  // "styles" name of the func from ln-4.  Export it.
