import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../styles/theme";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    // padding: 30,
    background: "#111",
    color: "white",
  },
}));

export const Header: NextPage = () => {
  const classes = useStyles(Theme);
  return <header className={classes.wrapper}></header>;
};
