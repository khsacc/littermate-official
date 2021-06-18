import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { Catch, Story, ItemComponent } from "../components/Pages/Top";
import { Theme } from "../styles/theme";

const useStyles = makeStyles((theme) => ({}));

const Home: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <>
      <Catch />
      <Story />
      <ItemComponent />
    </>
  );
};

export default Home;
