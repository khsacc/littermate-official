import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../styles/theme";
import { LittermateLogo } from "../Logo";

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      backgroundColor: theme.palette.grey[900],
      color: "white",
      padding: 20,
      marginTop: 20,
      // textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      height: 50,
      // padding: 20,
      paddingRight: 20,
      margin: 10,
      color: "white",
      borderRight: "1px solid white",
      display: "block",
    },
    social: {
      height: 50,
      display: "block",
      margin: 10,
    },
  };
});

export const Footer: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <footer className={classes.wrapper}>
      {/* <LittermateLogo className={classes.logo} /> */}
      {/* SNS logo */}
      <a href="https://www.instagram.com/littermate_official/">
        <img className={classes.social} src="/image/social/instagram.svg" />
      </a>
      <a
        target="_blank"
        rel="external nofollow"
        href="https://twitter.com/littermate_bio"
      >
        <img className={classes.social} src="/image/social/twitter.svg" />
      </a>
    </footer>
  );
};
