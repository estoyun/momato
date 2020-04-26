import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 1500,
    display: "flex",
    borderRadius: 0,
    backgroundColor: "white",
    height: "50px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: "center",
    color: "black",
  },
  login: {
    color: "black",
  },
  toolbar: {
    minHeight: "100%",
  },
}));

const Header = (props) => {
  console.log(props)
  const { login, loginCheck, loginInfo, logout } = props;
  const {
    loginReducer: { isLogin },
  } = loginInfo;
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" edge="start" className={classes.title}>
          MOMATO
        </Typography>
        <Typography variant="caption" className={classes.login}>
          {isLogin ? (
            <Button
              onClick={() => {
                logout();
              }}
            >
              로그아웃
            </Button>
          ) : (
            <Button
              onClick={() => {
                login();
              }}
            >
              로그인
            </Button>
          )}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;