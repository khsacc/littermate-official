import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
import { Catch, Story, ItemList } from "../components/Pages/Top";
import { Theme } from "../styles/theme";
import { LittermateLogo } from "../components/Logo";
import { useEffect } from "react";
import { useRouter } from "next/router";

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
  const router = useRouter();
  return (
    <>
      <Catch />
      <Story />
      <ItemList />
    </>
  );
};

export default Home;
