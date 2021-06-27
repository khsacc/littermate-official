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
      backgroundSize: "auto 100vh",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      position: "relative",
    },
    // todo: iPhone X で上部が隠れないことを確認する
    topLogo: {
      position: "absolute",
      width: "40vw",
      right: 25,
      top: 45,
      color: "white",
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
