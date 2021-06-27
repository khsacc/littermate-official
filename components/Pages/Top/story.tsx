import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
import { Theme } from "../../../styles/theme";
import { LittermateLogo } from "../../Logo";

const useStyle = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    margin: "30px auto",
  },
  bodyCopy: {
    textAlign: "center",
    lineHeight: 1.9,
  },
  logo: {
    width: 170,
    margin: 40,
  },
}));

export const Story: NextPage = () => {
  const classes = useStyle(Theme);
  return (
    <>
      <Typography variant="h2" className={classes.heading}>
        Brand Story
      </Typography>
      <Typography variant="body1" className={classes.bodyCopy}>
        情に棹させば流される。あああああああ
        <br />
        智に働けば角が立つ。ああああ
        <br />
        どこへ越しても住みにくいと悟った時、
        <br />
        詩が生れて、画が出来る。
        <br />
        とかくに人の世は住みにくい。
        <br />
        意地を通せば窮屈だ。 <br />
        とかくに人の世は住みにくい。
        <br />
        <LittermateLogo size="min" className={classes.logo} />
      </Typography>
    </>
  );
};
