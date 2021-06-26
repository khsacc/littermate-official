import { makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { Catch, Story, ItemList } from "../components/Pages/Top";
import { Theme } from "../styles/theme";
import { Menu } from "../components/Menu";

const useStyles = makeStyles((theme) => ({}));

const Home: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <>
      <Catch />
      <Story />
      <Menu />
      <ItemList />
    </>
  );
};

export default Home;
