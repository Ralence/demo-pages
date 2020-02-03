import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import logo from "../../assets/logo.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    flexGrow: 1,
    height: "120px",
    backgroundColor: "white",
    fontFamily: "roboto",
    color: "#293059",
    flexDirection: "column",
    alignItems: "felx-start",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      alignItems: "center",
      height: "70px"
    }
  },
  img: {
    height: "60px",
    width: "150px",
    margin: "5px",
    marginLeft: "20px"
  },
  title: {
    display: "inline-block",
    margin: "auto"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    margin: "5px",
    marginLeft: "20px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    backgroundColor: "#cccccc21"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const { setQuery, query } = props;

  return (
    <div className={classes.root}>
      <AppBar elevation={1} className={classes.header} position="static">
        <img className={classes.img} src={logo} alt="gigaaa logo" />
        <div className={classes.search} elevation={1}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </AppBar>
    </div>
  );
}
