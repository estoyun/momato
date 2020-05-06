import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import GrainIcon from "@material-ui/icons/Grain";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import Modals from "../common/Modal";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  userGrade: {
    alignSelf: "center",
    marginBottom: theme.spacing(2),
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  gradeComment: {
    color: "#999",
    alignSelf: "center",
  },
  userId: {
    alignSelf: "center",
  },
  clieckedItem: {
    backgroundColor: "#ccc",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
}));

const useInput = (initVal) => {
  const [value, setValue] = useState(initVal);
  return { value };
};

const Sidebar = (props) => {
  const classes = useStyles();
  const [clieckedIndex, setClieckedIndex] = useState(0);
  const date = JSON.stringify(
    useInput(new Date().toISOString().substr(0, 10).replace("T", " "))
  );

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <Toolbar />
      <Avatar className={classes.userGrade} src="" />
      <Modals type="info" name={"채채채채채채"}/>
      <Typography
        className={classes.gradeComment}
        variant="caption"
        display="block"
        gutterBottom
      >
        씨를 뿌린 초보 농사꾼
      </Typography>

      <div className={classes.drawerContainer}>
        <List>
          {["오늘의 토마토", "토마토 달력", "토마토 텃밭"].map(
            (text, index) => (
              <Link
                className={classes.link}
                key={text}
                to={
                  index === 0 ? "tomato" : index === 1 ? "calendar" : "template"
                }
              >
                <ListItem
                  button
                  className={
                    clieckedIndex === index ? classes.clieckedItem : ""
                  }
                  onClick={() => setClieckedIndex(index)}
                >
                  <ListItemIcon>
                    {index === 0 ? (
                      <CheckCircleIcon />
                    ) : index === 1 ? (
                      <EventNoteIcon />
                    ) : (
                      <GrainIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            )
          )}
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
