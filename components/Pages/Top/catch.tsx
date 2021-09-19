import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { useEffect } from "react";
import { useState } from "react";
import { Theme } from "../../../styles/theme";
import { LittermateLogo } from "../../Logo";
// import { topImage } from "./parameters";
import { UAParser } from "ua-parser-js";

const useStyles = makeStyles((theme) => {
  return {
    imgWrapper: {
      height: "100vh",
      width: "100vw",
      backgroundImage: `url(/image/S310/S310_Blue_4.jpg)`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      position: "relative",
      [theme.breakpoints.up(2500)]: {
        height: "150vh",
        backgroundAttachment: "scroll",
      },
    },
    imgWrapperiOs: {
      height: "100vh",
      width: "100vw",
      // backgroundImage: `url(${topImage})`,
      // backgroundPosition: "center",
      // backgroundSize: "cover",
      // backgroundRepeat: "no-repeat",
      // backgroundAttachment: "fixed",
      position: "relative",
      [theme.breakpoints.up(2500)]: {
        height: "150vh",
        // backgroundAttachment: "scroll",
      },
    },
    imgiOS: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      position: "absolute",
      top: 0,
      left: 0,
    },
    // todo: iPhone X で上部が隠れないことを確認する
    topLogo: {
      position: "absolute",
      //width: "65vw",
      width: "50vw",
      left: "25%",
      top: "7%",
      // color: theme.palette.grey[900],
      color: "white",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  };
});

export const Catch: NextPage = () => {
  const classes = useStyles(Theme);

  const [isiOS, setIsiOS] = useState(false);
  useEffect(() => {
    const uaParser = new UAParser();
    const currentOS = uaParser.getOS().name;
    setIsiOS(currentOS === "iOS");
  }, []);
  return !isiOS ? (
    <>
      <div className={classes.imgWrapper}>
        <LittermateLogo size="min" className={classes.topLogo} />
      </div>
    </>
  ) : (
    <div className={classes.imgWrapperiOs}>
      <img src="/image/S310/S310_Blue_4.jpg" className={classes.imgiOS} />
      <LittermateLogo size="min" className={classes.topLogo} />
    </div>
  );
};
