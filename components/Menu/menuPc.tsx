import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../styles/theme";
import { MenuContent } from "./menuContent";

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      position: "fixed",
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
      height: "100vh",
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
        width: 300,
      },
    },
  };
});

export const MenuPc: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <menu className={classes.wrapper}>
      <MenuContent />
    </menu>
  );
};
