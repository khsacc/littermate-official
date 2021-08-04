import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
import Head from "next/head";
import { Catch, Story, ItemList } from "../components/Pages/Top";
import { Theme } from "../styles/theme";
import { LittermateLogo } from "../components/Logo";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { itemData } from "../data/item";
import { CreateHead } from "../plugins/createHead";
import { News } from "../components/Pages/Top/news";

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
      <CreateHead />
      <Catch />
      <Story />
      <News />
      <ItemList />
    </>
  );
};

export default Home;
