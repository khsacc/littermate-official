import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../styles/theme";
import { Social } from "../Footer/social";
import { LittermateLogo } from "../Logo";
import Link from "next/link";

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      background: theme.palette.grey[900],
      width: "100%",
      height: "100%",
      padding: "30px 10%",
      [theme.breakpoints.up("sm")]: {
        padding: "30px 10%",
      },
    },
    logo: {
      color: "white",
      width: "100%",
      display: "block",
      margin: "0 auto",
    },
  };
});

export const MenuContent: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <div className={classes.wrapper}>
      <Link href="/">
        <a>
          <LittermateLogo className={classes.logo} />
        </a>
      </Link>

      <Social />
    </div>
  );
};
