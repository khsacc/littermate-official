import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
import { Catch, Story, ItemComponent } from "../components/Pages/Top";
import { Theme } from "../styles/theme";
import { LittermateLogo } from "../components/Logo";

const useStyles = makeStyles((theme) => ({
  comingSoon: {
    textAlign: "center",
    verticalAlign: "middle",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "25vw",
    lineHeight: "1.5",
  },
  letters: {
    margin: 20,
  },
}));

const Home: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <>
      {/* <Catch />
      <Story />
      <ItemComponent /> */}
      {/* 仮置 */}
      <div className={classes.comingSoon}>
        <div>
          <LittermateLogo className={classes.logo} /> <br />
          <Typography className={classes.letters} variant="body1">
            Official Website Coming Soon
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Home;
