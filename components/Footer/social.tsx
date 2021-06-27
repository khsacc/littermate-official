import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../styles/theme";
import { LittermateLogo } from "../Logo";

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.up("sm")]: {
        margin: "20px 0",
        justifyContent: "flex-start",
      },
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

export const Social: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <div className={classes.wrapper}>
      {/* SNS logo */}
      <a
        href="https://www.instagram.com/littermate_official/"
        target="_blank"
        rel="external nofollow"
      >
        <img className={classes.social} src="/image/social/instagram.svg" />
      </a>
      <a
        target="_blank"
        rel="external nofollow"
        href="https://twitter.com/littermate_bio"
      >
        <img className={classes.social} src="/image/social/twitter.svg" />
      </a>
    </div>
  );
};
