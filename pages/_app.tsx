import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "../styles/theme";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import router from "next/router";
import * as gtag from "../plugins/gtag";
import { MenuSp } from "../components/Menu/menuSp";
import { MenuPc } from "../components/Menu/menuPc";
import { LoadAnim } from "../components/LoadAnim";

const useStyles = makeStyles((theme) => {
  return {
    wholeWrapper: {
      position: "relative",
      height: "fit-content",
    },
    sequence: {
      position: "absolute",
      top: 0,
      right: 0,
      height: "100%",
      width: "50%",
      maxWidth: 300,
      backgroundImage: "url('/image/sequence/sequence.svg')",
      backgroundPosition: "right",
      backgroundRepeat: "no-repeat",
      [theme.breakpoints.up("sm")]: {
        // display: "none",
      },
    },
    pageWrapper: {
      minHeight: "100vh",
      overflow: "hidden",
      [theme.breakpoints.up(850)]: {
        width: "calc(100vw - 300px)",
        marginLeft: 300,
      },
    },
  };
});

export default function MyApp(props) {
  const classes = useStyles(Theme);
  const { Component, pageProps } = props;

  // Remove the server-side injected CSS to avoid hydration errors.
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    if (!gtag.isGaIdSet) {
      return;
    }

    const handleRouteChange = (path: string) => {
      gtag.pageView(path);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={Theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <LoadAnim />
        <Header />
        <div className={classes.wholeWrapper}>
          <div className={classes.sequence}></div>
          <MenuSp />
          <MenuPc />
          <div className={classes.pageWrapper}>
            <Component {...pageProps} />
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
