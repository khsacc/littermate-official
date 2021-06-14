import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";

const useStyles = makeStyles(() => ({
  wrapper: {
    padding: 30,
    background: "#111",
    color: "white",
  },
}));

export const Header: NextPage = () => {
  const classes = useStyles();
  return <header className={classes.wrapper}>header</header>;
};
