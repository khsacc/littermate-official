import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../../styles/theme";
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
    },
    img: {
      height: "100vh",
    },
  };
});

export const Catch: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <>
      <div className={classes.imgWrapper}></div>
    </>
  );
};
