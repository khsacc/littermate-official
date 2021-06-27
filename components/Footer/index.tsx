import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../styles/theme";
import { LittermateLogo } from "../Logo";
import { Social } from "./social";

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      backgroundColor: theme.palette.grey[900],
      color: "white",
      padding: 20,
      marginTop: 20,
      // textAlign: "center",

      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  };
});

export const Footer: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <footer className={classes.wrapper}>
      {/* <LittermateLogo className={classes.logo} /> */}
      {/* SNS logo */}
      <Social />
    </footer>
  );
};
