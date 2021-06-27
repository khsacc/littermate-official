import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
import { useEffect } from "react";
import { useState } from "react";
import { Theme } from "../../styles/theme";
import { LittermateLogo } from "../Logo";

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      position: "fixed",
      left: 0,
      top: 0,
      width: "100vw",
      height: "100vh",
      background: theme.palette.grey[900],
      zIndex: 10000,
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      animation: "$wrapperAnimation 0.2s 0.6s ease-in-out",
    },
    logo: {
      display: "block",
      width: "40%",
      animation: "$logoAnimation 0.3s ease-in-out",
    },
    "@keyframes logoAnimation": {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
    "@keyframes wrapperAnimation": {
      "0%": { opacity: 1 },
      "100%": { opacity: 0 },
    },
  };
});

export const LoadAnim: NextPage = () => {
  const classes = useStyles(Theme);
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timeOut = window.setTimeout(() => {
      setShow(false);
      window.clearTimeout(timeOut);
    }, 850);
  }, []);
  return (
    show && (
      <div className={classes.wrapper}>
        <LittermateLogo className={classes.logo} />
      </div>
    )
  );
};
