import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../../styles/theme";
import { LittermateLogo } from "../../Logo";
import { topImage } from "./parameters";

const useStyles = makeStyles((theme) => {
  return {
    imgWrapper: {
      height: "100vh",
      width: "100vw",
      backgroundImage: `url(${topImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      position: "relative",
    },
    // todo: iPhone X で上部が隠れないことを確認する
    topLogo: {
      position: "absolute",
      //width: "65vw",
      width: "50vw",
      left: "25%",
      top: "7%",
      color: theme.palette.grey[900],
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  };
});

export const Catch: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <>
      <div className={classes.imgWrapper}>
        <LittermateLogo size="min" className={classes.topLogo} />
      </div>
    </>
  );
};
